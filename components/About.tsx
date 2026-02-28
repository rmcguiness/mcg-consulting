import { HiSparkles } from 'react-icons/hi';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

interface AboutProps {
  showViewMore?: boolean;
}

export default function About({ showViewMore = false }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
              About MCG Consulting
            </h2>
            <p className="text-lg text-navy-600 mb-4 leading-relaxed">
              We&apos;re a team of passionate developers and designers dedicated to
              creating exceptional digital experiences. With years of experience
              in modern web technologies, we help businesses transform their
              online presence.
            </p>
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              Our approach combines cutting-edge technology with elegant design,
              ensuring your project not only looks great but performs flawlessly
              across all devices and platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="card-ios flex-1 text-center sm:text-left">
                <div className="text-3xl font-bold text-navy-900 mb-1">100+</div>
                <div className="text-navy-600 text-sm">Projects Delivered</div>
              </div>
              <div className="card-ios flex-1 text-center sm:text-left">
                <div className="text-3xl font-bold text-navy-900 mb-1">50+</div>
                <div className="text-navy-600 text-sm">Happy Clients</div>
              </div>
            </div>
            {showViewMore && (
              <Link
                href="/about"
                className="btn-ios btn-secondary inline-flex items-center gap-2"
              >
                Learn More
                <HiArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
          <div className="card-ios">
            <div className="aspect-video bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 flex items-center justify-center">
                  <HiSparkles className="w-16 h-16 text-navy-900 transform hover:scale-110 transition-transform duration-300 origin-center" />
                </div>
                <p className="text-navy-700 font-medium">Your Vision, Our Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
