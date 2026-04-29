import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { z } from 'zod';
import { renderAdminPage } from './adminPage.js';
import {
  createContact,
  deleteContact,
  initDatabase,
  listContacts,
  pool,
  updateContactStatus,
  type ContactStatus
} from './db.js';

const app = express();
const port = Number(process.env.PORT ?? 8080);
const adminUsername = process.env.ADMIN_USERNAME ?? 'admin';
const adminPassword = process.env.ADMIN_PASSWORD;

if (!adminPassword) {
  throw new Error('ADMIN_PASSWORD is required');
}

const defaultOrigins = [
  'https://dcannai.com',
  'https://www.dcannai.com',
  'https://chess.dcannai.com',
  'https://biotrack.dcannai.com',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001'
];

const allowedOrigins = new Set(
  (process.env.CORS_ORIGINS ?? defaultOrigins.join(','))
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
);

const requestCounts = new Map<string, { count: number; resetAt: number }>();
const oneHourMs = 60 * 60 * 1000;

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  role: z.string().trim().max(120).optional().or(z.literal('')),
  phone: z.string().trim().max(80).optional().or(z.literal('')),
  interest: z.string().trim().max(160).optional().or(z.literal('')),
  budget: z.string().trim().max(120).optional().or(z.literal('')),
  timeline: z.string().trim().max(120).optional().or(z.literal('')),
  product: z.enum(['dcannai', 'chess', 'biotrack', 'velammal']).default('dcannai'),
  source: z.string().trim().min(2).max(120).default('dcannai-landing'),
  message: z.string().trim().min(10).max(5000),
  website: z.string().trim().max(0).optional().or(z.literal('')),
  metadata: z.record(z.unknown()).optional()
});

const statusSchema = z.object({
  status: z.enum(['new', 'contacted', 'qualified', 'closed', 'spam'])
});

app.set('trust proxy', true);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '64kb' }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      try {
        const url = new URL(origin);
        const isVercelPreview = url.hostname.endsWith('.vercel.app');
        callback(null, allowedOrigins.has(origin) || isVercelPreview);
      } catch {
        callback(null, false);
      }
    }
  })
);

app.get('/health', async (_req, res) => {
  await pool.query('SELECT 1');
  res.json({ ok: true, service: 'dcann-contact-api' });
});

app.post('/api/contact', async (req, res) => {
  const ip = req.ip ?? req.socket.remoteAddress ?? 'unknown';
  const bucket = requestCounts.get(ip) ?? { count: 0, resetAt: Date.now() + oneHourMs };

  if (Date.now() > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = Date.now() + oneHourMs;
  }

  bucket.count += 1;
  requestCounts.set(ip, bucket);

  if (bucket.count > 20) {
    res.status(429).json({ error: 'Too many submissions. Please try again later.' });
    return;
  }

  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid submission', details: parsed.error.flatten() });
    return;
  }

  if (parsed.data.website) {
    res.status(202).json({ ok: true });
    return;
  }

  const contact = await createContact({
    ...parsed.data,
    ipAddress: ip,
    userAgent: req.get('user-agent'),
    metadata: {
      ...parsed.data.metadata,
      referrer: req.get('referer') ?? null
    }
  });

  res.status(201).json({ ok: true, id: contact.id });
});

function requireAdmin(req: express.Request, res: express.Response, next: express.NextFunction) {
  const header = req.get('authorization') ?? '';
  const [scheme, encoded] = header.split(' ');

  if (scheme !== 'Basic' || !encoded) {
    res.set('WWW-Authenticate', 'Basic realm="DCANNAI Admin"');
    res.status(401).send('Authentication required');
    return;
  }

  const [username, password] = Buffer.from(encoded, 'base64').toString('utf8').split(':');

  if (username !== adminUsername || password !== adminPassword) {
    res.set('WWW-Authenticate', 'Basic realm="DCANNAI Admin"');
    res.status(401).send('Authentication required');
    return;
  }

  next();
}

app.get('/admin', requireAdmin, (_req, res) => {
  res.type('html').send(renderAdminPage());
});

app.get('/api/admin/submissions', requireAdmin, async (req, res) => {
  const status = typeof req.query.status === 'string' ? req.query.status : undefined;
  const product = typeof req.query.product === 'string' ? req.query.product : undefined;
  const limit = typeof req.query.limit === 'string' ? Number(req.query.limit) : undefined;
  const submissions = await listContacts({ status, product, limit });
  res.json({ submissions });
});

app.patch('/api/admin/submissions/:id', requireAdmin, async (req, res) => {
  const parsed = statusSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid status' });
    return;
  }

  const contact = await updateContactStatus(req.params.id, parsed.data.status as ContactStatus);

  if (!contact) {
    res.status(404).json({ error: 'Submission not found' });
    return;
  }

  res.json({ submission: contact });
});

app.delete('/api/admin/submissions/:id', requireAdmin, async (req, res) => {
  const contact = await deleteContact(req.params.id);

  if (!contact) {
    res.status(404).json({ error: 'Submission not found' });
    return;
  }

  res.json({ ok: true, submission: contact });
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

initDatabase()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`dcann-contact-api listening on ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start dcann-contact-api', error);
    process.exit(1);
  });
