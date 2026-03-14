/**
 * Case Studies landing page — grid of case study cards.
 * Data sourced from lib/case-studies.ts.
 */
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { HiArrowRight, HiTrendingUp, HiStar } from 'react-icons/hi';
import { HiDevicePhoneMobile, HiHome } from 'react-icons/hi2';
import { caseStudies, CASE_STUDY_COUNT } from '@/lib/case-studies';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies — Real Results for Florida Keys Businesses',
  description:
    'See how MCG Consulting helped fishing charters, sunset cruises, vacation rentals, and tour operators grow revenue with modern websites and digital strategy.',
};

/** Maps icon name strings to React icon components. */
const iconMap = {
  'trending-up': HiTrendingUp,
  'star': HiStar,
  'home': HiHome,
  'device-phone': HiDevicePhoneMobile,
} as const;

/** Summary stats displayed above the case study grid. */
const SUMMARY_STATS = [
  { value: `${CASE_STUDY_COUNT}`, label: 'Client success stories' },
  { value: '5.25 wks', label: 'Avg. time to launch' },
  { value: '$100K+', label: 'Client revenue generated' },
  { value: '100%', label: 'Keys-based expertise' },
] as const;

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-widest mb-3">
                Proven Results
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
                Case Studies
              </h1>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Real businesses. Real numbers. See how we help Florida Keys tourism
                operators grow revenue and cut costs with modern web presence.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
              {SUMMARY_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white rounded-xl border border-navy-100 shadow-sm py-4 px-3"
                >
                  <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
                  <p className="text-xs text-navy-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study) => {
                const IconComponent = iconMap[study.iconName];
                return (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    className="card-ios hover:shadow-ios-lg group transition-all duration-300 flex flex-col"
                  >
                    {/* Icon + Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-navy-900" />
                        </div>
                        <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                          {study.category}
                        </span>
                      </div>
                      <HiArrowRight className="w-5 h-5 text-navy-400 group-hover:text-navy-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    {/* Content */}
                    <h2 className="text-xl font-bold text-navy-900 mb-1">
                      {study.title}
                    </h2>
                    <p className="text-sm text-navy-500 font-medium mb-3">
                      {study.subtitle}
                    </p>
                    <p className="text-navy-600 text-sm leading-relaxed mb-4 flex-grow">
                      {study.description}
                    </p>

                    {/* Tags + Timeline */}
                    <div className="mt-auto">
                      <div className="mb-3">
                        <span
                          className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full ${study.heroMetricColor}`}
                        >
                          {study.heroMetric}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-navy-700 bg-navy-100 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-navy-100 flex items-center justify-between">
                        <span className="text-xs text-navy-500">
                          Timeline:{' '}
                          <strong className="text-navy-700">{study.timeline}</strong>
                        </span>
                        <span className="text-xs font-medium text-navy-900 group-hover:underline">
                          Read case study →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-navy-600 mb-4">
                Ready to see results like these for your business?
              </p>
              <Link
                href="/contact"
                className="btn-ios btn-navy inline-flex items-center gap-2"
              >
                Get Similar Results
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
