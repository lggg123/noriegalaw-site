import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Law Offices of Chris Noriega</p>
            <p className="mb-2">201 N First St.</p>
            <p className="mb-2">La Puente, CA 91744</p>
            <p className="mb-2">
              <a href="tel:+16263368080" className="hover:text-white">
                (626) 336-8080
              </a>
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/practice-areas/criminal-defense" className="hover:text-white">
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/dui-defense" className="hover:text-white">
                  DUI Defense
                </Link>
              </li>
              {/* Add more practice areas */}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Certifications */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {/* Add social media icons/links */}
            </div>
            {/* Add certification badges */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Law Offices of Chris Noriega. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;