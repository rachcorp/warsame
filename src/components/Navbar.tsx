import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#E31837] py-6">
      <div className="container mx-auto px-4 md:px-8">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          <Link href="/" className="flex flex-col items-center">
            <span className="text-white text-xl mb-2">Ontario</span>
            <Image
              src="/images/olp-white.svg"
              alt="Ontario Liberal Logo"
              width={100}
              height={30}
              priority
            />
          </Link>
          <span className="text-white text-lg text-center">
            Seeking Ontario Liberal Nomination for Ottawa West-Nepean
          </span>
          <div className="flex space-x-6 mt-4">
            <Link href="/" className="text-white text-lg hover:text-gray-200">Home</Link>
            <Link href="/about" className="text-white text-lg hover:text-gray-200">About</Link>
            <Link href="/donate" className="text-white text-lg hover:text-gray-200">Donate</Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <span className="text-white text-xl mr-2">Ontario</span>
              <Image
                src="/images/olp-white.svg"
                alt="Ontario Liberal Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
            <span className="text-white text-xl">
              Seeking Ontario Liberal Nomination for Ottawa West-Nepean
            </span>
          </div>
          
          <div className="flex space-x-8">
            <Link href="/" className="text-white text-xl hover:text-gray-200">Home</Link>
            <Link href="/about" className="text-white text-xl hover:text-gray-200">About</Link>
            <Link href="/donate" className="text-white text-xl hover:text-gray-200">Donate</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 