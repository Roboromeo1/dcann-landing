'use client';

import { useState } from 'react';
import type { ContactFormData } from '@/types';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  company: '',
  role: '',
  phone: '',
  product: 'dcannai',
  interest: '',
  timeline: '',
  message: '',
  website: ''
};

const contactApiUrl =
  process.env.NEXT_PUBLIC_CONTACT_API_URL ?? 'https://dcann-contact-api-production.up.railway.app/api/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          source: 'dcannai-landing',
          metadata: {
            page: typeof window !== 'undefined' ? window.location.pathname : '/'
          }
        })
      });

      if (!response.ok) {
        throw new Error('Contact submission failed');
      }

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="rounded-lg border border-black/10 bg-[#f7f4eb] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#137a45]">Received</p>
        <h3 className="mt-4 text-3xl font-semibold text-[#1d1d1f]">Thanks. We have your enquiry.</h3>
        <p className="mt-4 text-base leading-7 text-[#515154]">
          The details are saved in the DCANNAI admin backend. We will reply from hello@dcannai.com.
        </p>
        <button
          type="button"
          onClick={() => setSubmitStatus('idle')}
          className="mt-7 inline-flex min-h-11 items-center rounded-full bg-[#1d1d1f] px-5 text-sm font-semibold text-white transition hover:bg-black"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-[#f7f4eb] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:p-8">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-[#1d1d1f]">Get a focused reply.</h2>
        <p className="mt-3 text-sm leading-6 text-[#6e6e73]">
          Share enough context for a useful first response. Required fields are marked.
        </p>
      </div>

      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" required>
          <input id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClassName} />
        </Field>

        <Field label="Work email" required>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className={inputClassName} />
        </Field>

        <Field label="Company or school">
          <input id="company" name="company" value={formData.company} onChange={handleChange} className={inputClassName} />
        </Field>

        <Field label="Role">
          <input id="role" name="role" value={formData.role} onChange={handleChange} className={inputClassName} />
        </Field>

        <Field label="Product" required>
          <select id="product" name="product" value={formData.product} onChange={handleChange} required className={inputClassName}>
            <option value="dcannai">General DCANNAI or research</option>
            <option value="chess">DCANNAI Chess</option>
            <option value="velammal">School white label</option>
            <option value="biotrack">BioTrack</option>
          </select>
        </Field>

        <Field label="Research area">
          <select id="interest" name="interest" value={formData.interest} onChange={handleChange} className={inputClassName}>
            <option value="">Select area</option>
            <option value="academy-partnership">Academy partnership</option>
            <option value="preventive-health">Preventive health</option>
            <option value="organic-farming-ai">Organic farming AI</option>
            <option value="gene-therapy-ai">Gene therapy AI</option>
            <option value="genetic-modification-ai">Genetic modification AI</option>
            <option value="trading-ai">Trading AI</option>
          </select>
        </Field>

        <Field label="Timeline">
          <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className={inputClassName}>
            <option value="">Select timeline</option>
            <option value="this-week">This week</option>
            <option value="this-month">This month</option>
            <option value="this-quarter">This quarter</option>
            <option value="exploring">Exploring options</option>
          </select>
        </Field>
      </div>

      <Field label="What should we help with?" required className="mt-4">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClassName} resize-y`}
          placeholder="Example: We want a branded chess academy portal for 500 students..."
        />
      </Field>

      {submitStatus === 'error' && (
        <div className="mt-4 rounded-md border border-[#ff3b30]/30 bg-[#fff2f1] px-4 py-3 text-sm font-medium text-[#b42318]">
          The form could not be sent. Please try again or email hello@dcannai.com.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1d1d1f] px-6 text-base font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-[#86868b]"
      >
        {isSubmitting ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  );
}

const inputClassName =
  'mt-2 min-h-12 w-full rounded-md border border-black/10 bg-white px-4 text-base text-[#1d1d1f] outline-none transition placeholder:text-[#86868b] focus:border-[#0a63ce] focus:ring-4 focus:ring-[#0a63ce]/10';

function Field({
  label,
  required,
  className,
  children
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block text-sm font-semibold text-[#1d1d1f] ${className ?? ''}`}>
      {label}
      {required ? <span className="text-[#b42318]"> *</span> : null}
      {children}
    </label>
  );
}
