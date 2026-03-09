import TechGlobe from './TechGlobe';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
      {/* Tech Globe positioned to the right */}
      <div className="absolute top-0 right-0 w-full h-full flex items-center justify-end z-0">
        <div className="w-full md:w-3/5 h-full relative" style={{ transform: 'translateX(10%)' }}>
          <TechGlobe />
        </div>
      </div>

      {/* White gradient overlay for text readability */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0) 70%)'
        }} />

      {/* Content positioned to the left */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-left md:max-w-xl lg:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
            Florida Keys Businesses:
            <br />
            <span className="text-navy-600">More Bookings, Less Phone Tag</span>
          </h1>
          <p className="text-lg sm:text-xl text-navy-600 mb-10 leading-relaxed max-w-md lg:max-w-2xl">
            60–70% of your customers are browsing on their phones. If they
            can&apos;t book in under 3 minutes, they&apos;ll book with someone else.
            We build fast, mobile-first websites for charter captains, dive shops,
            tour operators, and resorts — with online booking that works while
            you&apos;re on the water.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="/contact?subject=Free+Website+Audit"
              className="btn-ios btn-primary text-lg px-8 py-4"
            >
              Get a Free Website Audit
            </a>
            <a
              href="/portfolio"
              className="btn-ios btn-secondary text-lg px-8 py-4"
            >
              See Our Keys Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

