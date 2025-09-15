import { FieldValue, Timestamp } from 'firebase/firestore';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  interest: string;
  message: string;
}

export interface FirebaseSubmission extends ContactFormData {
  id?: string;
  timestamp?: FieldValue | Timestamp;
  status?: 'new' | 'contacted' | 'closed' | 'email-sent' | 'email-failed';
  emailSent?: boolean;
  emailSentAt?: FieldValue | Timestamp;
  emailError?: string;
  source?: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  key: string;
}