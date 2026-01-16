'use client';

import { useState } from 'react';
import { HiPhone } from 'react-icons/hi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Fire conversion event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17854144169/DpGWCPf30OYbEKm9wsFC'
        });
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-navy-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Ready to start your project? Let&apos;s discuss how we can help.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a href="tel:(732) 675-8146" className="btn-ios btn-primary text-lg px-8 py-4">Call Us <span className="hidden sm:inline text-md">: (732) 675-8146</span></a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8">
          <hr className="w-full border-1 border-navy-200" />
          <p className="text-xl no-wrap text-navy-600 max-w-2xl mx-auto text-center">
            Or
          </p>
          <hr className="w-full border-1 border-navy-200" />
        </div>
        <div className="card-ios">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy-900 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-ios border-2 border-navy-200 focus:border-navy-900 focus:outline-none transition-colors text-navy-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy-900 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-ios border-2 border-navy-200 focus:border-navy-900 focus:outline-none transition-colors text-navy-900"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-navy-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-ios border-2 border-navy-200 focus:border-navy-900 focus:outline-none transition-colors text-navy-900 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            {submitStatus.type && (
              <div
                className={`p-4 rounded-ios ${submitStatus.type === 'success'
                  ? 'bg-green-100 text-green-800 border-2 border-green-300'
                  : 'bg-red-100 text-red-800 border-2 border-red-300'
                  }`}
              >
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-ios btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

