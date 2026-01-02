export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-navy-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-6 leading-tight">
            Web Consulting
            <br />
            <span className="text-navy-600">That Delivers</span>
          </h1>
          <p className="text-xl sm:text-2xl text-navy-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with modern, elegant solutions
            that drive results and exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-navy-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-navy-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}

