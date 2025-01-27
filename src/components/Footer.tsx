import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-[#E31837] p-4 rounded-lg">
              <Image
                src="/images/olp-white.svg"
                alt="Liberal Logo"
                width={120}
                height={40}
                priority
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/" className="hover:text-[#E31837]">Home</Link>
            <Link href="/about" className="hover:text-[#E31837]">About</Link>
            <Link href="/donate" className="hover:text-[#E31837]">Donate</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/Wwarsamej" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#E31837]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="http://www.linkedin.com/in/warsame-j-warsame-pmp%C2%AE-380395ba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#E31837]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-sm">Seeking nomination for</p>
            <p className="font-semibold">Ottawa West-Nepean</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© 2025 Warsame J Warsame Campaign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 