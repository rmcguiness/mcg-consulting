/**
 * Dynamic case study detail page.
 * Renders the full narrative, metrics, before/after comparisons,
 * client quote, and CTA for each case study.
 */
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HiChevronLeft, HiArrowRight } from 'react-icons/hi';
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from '@/lib/case-studies';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static params for all case study slugs.
 */
export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

/**
 * Generate metadata for each case study page.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: 'Case Study Not Found' };

  return {
    title: `${study.title} — Case Study`,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-navy-500 hover:text-navy-900 transition-colors mb-8"
            >
              <HiChevronLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                  {study.category}
                </span>
                <span className="text-sm text-navy-400">
                  {study.timeline} to launch
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-2">
                {study.title}
              </h1>
              <p className="text-lg text-navy-600">{study.subtitle}</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`rounded-xl p-5 text-center ${metric.color}`}
                >
                  <p className="text-3xl font-bold mb-1">{metric.value}</p>
                  <p className="text-sm font-medium opacity-80">{metric.label}</p>
                </div>
              ))}
            </div>

            {/* The Challenge */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                The Challenge
              </h2>
              <p className="text-navy-700 leading-relaxed">{study.problem}</p>
            </div>

            {/* Our Solution */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                Our Solution
              </h2>
              <p className="text-navy-700 leading-relaxed">{study.solution}</p>
            </div>

            {/* Before & After */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                Before & After
              </h2>
              <div className="space-y-3">
                {study.beforeAfter.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                      <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1">
                        Before
                      </p>
                      <p className="text-sm text-red-800">{item.before}</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
                        After
                      </p>
                      <p className="text-sm text-green-800">{item.after}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Results */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                The Results
              </h2>
              <p className="text-navy-700 leading-relaxed">{study.results}</p>
            </div>

            {/* Client Quote */}
            <div className="bg-navy-50 border border-navy-100 rounded-2xl p-8 mb-12">
              <blockquote className="text-navy-800 text-lg leading-relaxed italic mb-4">
                &ldquo;{study.clientQuote}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-navy-900">{study.clientName}</p>
                <p className="text-sm text-navy-500">{study.clientRole}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white border border-navy-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Ready for results like these?
              </h3>
              <p className="text-navy-600 mb-6">
                Let&apos;s talk about what we can do for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/audit"
                  className="btn-ios btn-navy inline-flex items-center justify-center gap-2"
                >
                  Get a Free Site Audit
                  <HiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-ios border border-navy-200 text-navy-900 hover:bg-navy-50 inline-flex items-center justify-center gap-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
