import Image from "next/image";
import Navbar from '@/components/Navbar';
import ImageGallery from '@/components/ImageGallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Image */}
        <div className="relative w-full min-h-[50vh] md:min-h-[calc(100vh-88px)]">
          <Image
            src="/images/warsame-sit.jpeg"
            alt="Warsame profile image"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        
        {/* Right side - Red background with content */}
        <div className="bg-[#E31837] flex flex-col justify-center items-center text-center px-4 md:px-16 py-12 md:py-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Warsame J Warsame
          </h1>
          <h2 className="text-xl md:text-3xl text-white mb-8 md:mb-12">
            Seeking Ontario Liberal nomination for Ottawa West-Nepean
          </h2>
          <div className="mb-8 md:mb-12 w-[200px] md:w-[300px]">
            <Image
              src="/images/olp-white.svg"
              alt="Liberal Logo"
              width={300}
              height={100}
              priority
            />
          </div>
          <div className="mt-8 flex gap-8">
            {/* X (Twitter) Icon */}
            <a 
              href="https://x.com/Wwarsamej" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a 
              href="http://www.linkedin.com/in/warsame-j-warsame-pmp%C2%AE-380395ba" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Add ImageGallery component */}
      <ImageGallery />
      
      {/* Add Footer component */}
      <Footer />
    </main>
  );
}
