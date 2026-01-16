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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-6 leading-tight">
            Web Consulting
            <br />
            <span className="text-navy-600">That Delivers</span>
          </h1>
          <p className="text-xl sm:text-2xl text-navy-600 mb-10 leading-relaxed max-w-md lg:max-w-2xl">
            Transform your digital presence with modern, elegant solutions
            that drive results and exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#contact"
              className="btn-ios btn-primary text-lg px-8 py-4"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="btn-ios btn-secondary text-lg px-8 py-4"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

