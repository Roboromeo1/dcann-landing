'use client';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { db, functions } from '@/lib/firebase';
import type { ContactFormData } from '@/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
    interest: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store submission in Firestore
      const docRef = await addDoc(collection(db, 'contact-submissions'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'new',
        source: 'website-contact-form'
      });

      // Trigger email function (if available)
      try {
        const sendEmail = httpsCallable(functions, 'sendContactEmail');
        await sendEmail({
          submissionId: docRef.id,
          ...formData
        });
      } catch {
        console.log('Email function not available, form still submitted');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        message: '',
        interest: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-dark p-8 rounded-2xl border border-gray-700">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Get Started Today</h2>
      <p className="text-gray-300 mb-8">
        Tell us about your project and how we can help you implement sustainable AI solutions.
      </p>
      
      {submitStatus === 'success' ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-6">🌱</div>
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Thank you for choosing sustainable AI!</h3>
          <p className="text-gray-300 mb-8">
            We&apos;ve received your message and will get back to you within 24 hours to discuss your eco-friendly AI needs.
          </p>
          <button 
            onClick={() => setSubmitStatus('idle')}
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:glow-accent"
          >
            Send Another Message
          </button>
        </div>
      ) : submitStatus === 'error' ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-6">⚠️</div>
          <h3 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h3>
          <p className="text-gray-300 mb-8">
            Please try again or email us directly at hello@dcannai.com
          </p>
          <button 
            onClick={() => setSubmitStatus('idle')}
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:glow-accent"
          >
            Try Again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-100 placeholder-gray-400"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-100 placeholder-gray-400"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-100 placeholder-gray-400"
            />
          </div>
          
          <div>
            <label htmlFor="interest" className="block text-sm font-semibold text-gray-300 mb-2">
              Area of Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-100 placeholder-gray-400"
            >
              <option value="">Select an option</option>
              <option value="trading-ai">Sustainable Trading AI</option>
              <option value="smart-farming">Smart Farming Solutions</option>
              <option value="retail-intelligence">Green Retail Intelligence</option>
              <option value="custom-solution">Custom AI Solution</option>
              <option value="consultation">General Consultation</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="industry" className="block text-sm font-semibold text-gray-300 mb-2">
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-100 placeholder-gray-400"
            >
              <option value="">Select your industry</option>
              <option value="finance">Finance & Trading</option>
              <option value="agriculture">Agriculture</option>
              <option value="retail">Retail & E-commerce</option>
              <option value="logistics">Logistics & Supply Chain</option>
              <option value="energy">Renewable Energy</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
              placeholder="Tell us about your project, goals, and how we can help..."
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 hover:glow-accent'
            } text-white`}
          >
            {isSubmitting ? 'Sending to Firebase...' : 'Send Message 🚀'}
          </button>
        </form>
      )}
    </div>
  );
}