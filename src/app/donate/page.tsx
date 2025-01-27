import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Donate() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-[400px] w-full">
            <Image
              src="/images/donate.png"
              alt="Growing Plant Symbol"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold text-[#E31837] mb-6">
              Help Our Movement Grow
            </h1>

            <p className="text-xl text-gray-900 md:text-gray-700 mb-8 text-center md:text-left">
              Your contribution, no matter the size, helps nurture positive change in Ottawa West-Nepean.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 w-full">
              <p className="text-lg text-gray-900 md:text-gray-700 mb-4 text-center md:text-left">
                To support our campaign, please send your donation via Interac e-Transfer to:
              </p>
              <p className="font-mono text-xl text-gray-900 md:text-gray-700 bg-gray-50 p-4 rounded-lg text-center">
                warsame@votewarsame.ca
              </p>
            </div>

            <p className="text-sm text-gray-900 md:text-gray-600 italic text-center md:text-left">
              Together, we can build a stronger, more inclusive community.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 