import { randomUUID } from 'node:crypto';
import pg from 'pg';

const { Pool } = pg;

export type ContactStatus = 'new' | 'contacted' | 'qualified' | 'closed' | 'spam';

export interface ContactSubmission {
  id: string;
  created_at: string;
  updated_at: string;
  source: string;
  product: string | null;
  name: string;
  email: string;
  company: string | null;
  role: string | null;
  phone: string | null;
  interest: string | null;
  budget: string | null;
  timeline: string | null;
  message: string;
  status: ContactStatus;
  metadata: Record<string, unknown>;
  ip_address: string | null;
  user_agent: string | null;
}

export interface CreateContactInput {
  source: string;
  product?: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  phone?: string;
  interest?: string;
  budget?: string;
  timeline?: string;
  message: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required');
}

export const pool = new Pool({
  connectionString: databaseUrl,
  max: Number(process.env.DB_POOL_SIZE ?? 5),
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 10_000
});

export async function initDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id UUID PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      source TEXT NOT NULL,
      product TEXT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      role TEXT,
      phone TEXT,
      interest TEXT,
      budget TEXT,
      timeline TEXT,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
      ip_address TEXT,
      user_agent TEXT
    );

    CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
      ON contact_submissions (created_at DESC);

    CREATE INDEX IF NOT EXISTS contact_submissions_status_idx
      ON contact_submissions (status);

    CREATE INDEX IF NOT EXISTS contact_submissions_product_idx
      ON contact_submissions (product);
  `);
}

export async function createContact(input: CreateContactInput) {
  const id = randomUUID();
  const result = await pool.query<ContactSubmission>(
    `
      INSERT INTO contact_submissions (
        id,
        source,
        product,
        name,
        email,
        company,
        role,
        phone,
        interest,
        budget,
        timeline,
        message,
        metadata,
        ip_address,
        user_agent
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13::jsonb, $14, $15)
      RETURNING *
    `,
    [
      id,
      input.source,
      input.product ?? null,
      input.name,
      input.email,
      input.company ?? null,
      input.role ?? null,
      input.phone ?? null,
      input.interest ?? null,
      input.budget ?? null,
      input.timeline ?? null,
      input.message,
      JSON.stringify(input.metadata ?? {}),
      input.ipAddress ?? null,
      input.userAgent ?? null
    ]
  );

  return result.rows[0];
}

export async function listContacts(filters: { status?: string; product?: string; limit?: number }) {
  const clauses: string[] = [];
  const values: unknown[] = [];

  if (filters.status) {
    values.push(filters.status);
    clauses.push(`status = $${values.length}`);
  }

  if (filters.product) {
    values.push(filters.product);
    clauses.push(`product = $${values.length}`);
  }

  values.push(Math.min(filters.limit ?? 100, 250));

  const where = clauses.length > 0 ? `WHERE ${clauses.join(' AND ')}` : '';
  const result = await pool.query<ContactSubmission>(
    `
      SELECT *
      FROM contact_submissions
      ${where}
      ORDER BY created_at DESC
      LIMIT $${values.length}
    `,
    values
  );

  return result.rows;
}

export async function updateContactStatus(id: string, status: ContactStatus) {
  const result = await pool.query<ContactSubmission>(
    `
      UPDATE contact_submissions
      SET status = $2, updated_at = now()
      WHERE id = $1
      RETURNING *
    `,
    [id, status]
  );

  return result.rows[0] ?? null;
}
