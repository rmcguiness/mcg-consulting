import { HiCode, HiColorSwatch, HiChartBar, HiLightBulb, HiLightningBolt, HiCog } from 'react-icons/hi';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    icon: HiCode,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
    icon: HiColorSwatch,
  },
  {
    title: "Digital Strategy",
    description: "Data-driven strategies to grow your online presence and reach your goals.",
    icon: HiChartBar,
  },
  {
    title: "Consulting",
    description: "Expert guidance to help you make the right technology decisions.",
    icon: HiLightBulb,
  },
  {
    title: "Performance Optimization",
    description: "Speed up your site and improve user experience with optimized code.",
    icon: HiLightningBolt,
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support to keep your digital assets running smoothly.",
    icon: HiCog,
  },
];

interface ServicesProps {
  showViewMore?: boolean;
}

export default function Services({ showViewMore = false }: ServicesProps) {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card-ios group cursor-default"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-5">
                  <IconComponent className="w-6 h-6 text-navy-900 transform group-hover:scale-110 transition-transform duration-300 origin-center" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-navy-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {showViewMore && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-ios btn-secondary inline-flex items-center gap-2"
            >
              View All Services
              <HiArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
