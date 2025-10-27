import Link from 'next/link';
import { SOCIAL_MEDIA_LINKS } from '@/utils/data';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="footer-section">
          <Link href="/">
            <h3 className="text-lg font-bold mb-4 hover:text-blue-400 transition-colors cursor-pointer">WINNERS</h3>
          </Link>
          <p className="text-gray-300 text-sm mb-4">
            Empowering lives through diverse opportunities and comprehensive services across 20 industry sectors.
          </p>
          <div className="flex gap-4">
            {SOCIAL_MEDIA_LINKS.map((social) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={social.name}
                  href={social.href} 
                  aria-label={social.ariaLabel} 
                  className={`${social.hoverColor} transition-colors`}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-300 text-sm hover:text-white transition-colors">About Winners</Link></li>
            <li><Link href="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Our Services</Link></li>
            <li><Link href="/blog" className="text-gray-300 text-sm hover:text-white transition-colors">Success Stories</Link></li>
            <li><Link href="/services/1" className="text-gray-300 text-sm hover:text-white transition-colors">Training Programs</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Support Help Center</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="text-gray-300 text-sm hover:text-white transition-colors">Help Center</Link></li>
            <li><Link href="/contact" className="text-gray-300 text-sm hover:text-white transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li><a href="tel:+15551234567" className="text-gray-300 text-sm hover:text-white transition-colors">+1 (555) 123-4567</a></li>
            <li><a href="mailto:info@winnersgroup.com" className="text-gray-300 text-sm hover:text-white transition-colors">info@winnersgroup.com</a></li>
            <li><span className="text-gray-300 text-sm">123 Business Ave, Suite 100</span></li>
            <li><span className="text-gray-300 text-sm">New York, NY 10001</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}