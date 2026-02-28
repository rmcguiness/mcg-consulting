import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-3">MCG Consulting</h3>
            <p className="text-navy-400 leading-relaxed text-sm">
              Delivering exceptional web solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-navy-200">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-navy-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-navy-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-navy-400 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-navy-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-navy-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-navy-200">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:ryanmcguiness123@gmail.com" className="text-navy-400 hover:text-white transition-colors">
                  ryanmcguiness123@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+17326758146" className="text-navy-400 hover:text-white transition-colors">
                  (732) 675-8146
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-800 pt-8 text-center text-navy-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MCG Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
