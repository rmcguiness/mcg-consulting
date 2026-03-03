"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success state
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-widest mb-3">
                Get in Touch
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
                Let&apos;s Build Something Great
              </h1>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Tell us about your project and we&apos;ll get back to you within 24 hours
                with a free consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="card-ios">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center">
                      <HiMail className="w-5 h-5 text-navy-900" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">Email</p>
                      <a
                        href="mailto:hello@mcg-consulting.xyz"
                        className="text-sm text-navy-500 hover:text-navy-900 transition-colors"
                      >
                        hello@mcg-consulting.xyz
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-ios">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center">
                      <HiPhone className="w-5 h-5 text-navy-900" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">Phone</p>
                      <p className="text-sm text-navy-500">Available upon request</p>
                    </div>
                  </div>
                </div>

                <div className="card-ios">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center">
                      <HiLocationMarker className="w-5 h-5 text-navy-900" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">Location</p>
                      <p className="text-sm text-navy-500">Florida Keys, FL</p>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-900 text-white rounded-xl p-6">
                  <h3 className="font-bold mb-2">Free Consultation</h3>
                  <p className="text-navy-200 text-sm leading-relaxed">
                    Every project starts with a free 30-minute consultation. We&apos;ll
                    discuss your goals, review your current web presence, and outline a
                    clear plan forward.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="card-ios text-center py-16">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiMail className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900 mb-2">
                      Message Sent!
                    </h2>
                    <p className="text-navy-600">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="card-ios space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-navy-900 mb-1.5"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy-900 mb-1.5"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all text-sm"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-medium text-navy-900 mb-1.5"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all text-sm"
                        placeholder="Your business name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-sm font-medium text-navy-900 mb-1.5"
                        >
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all text-sm bg-white"
                        >
                          <option value="">Select a project type</option>
                          <option value="new-website">New Website</option>
                          <option value="redesign">Website Redesign</option>
                          <option value="ecommerce">E-Commerce / Online Ordering</option>
                          <option value="booking">Booking System</option>
                          <option value="seo">SEO & Local Search</option>
                          <option value="web-app">Web Application / SaaS</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-navy-900 mb-1.5"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all text-sm bg-white"
                        >
                          <option value="">Select a range</option>
                          <option value="under-2k">Under $2,000</option>
                          <option value="2k-5k">$2,000 – $5,000</option>
                          <option value="5k-10k">$5,000 – $10,000</option>
                          <option value="10k-25k">$10,000 – $25,000</option>
                          <option value="25k+">$25,000+</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy-900 mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all text-sm resize-none"
                        placeholder="Tell us about your project — what does your business do, what do you need, and what are your goals?"
                      />
                    </div>

                    <button type="submit" className="btn-ios btn-navy w-full text-center">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
