import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#E31837] py-6">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/olp-white.svg"
              alt="Liberal Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
          <span className="text-white text-xl">
            Seeking Nomination for Ottawa West-Nepean
          </span>
        </div>
        
        <div className="flex space-x-8">
          <Link href="/" className="text-white text-xl hover:text-gray-200">Home</Link>
          <Link href="/about" className="text-white text-xl hover:text-gray-200">About</Link>
          <Link href="/donate" className="text-white text-xl hover:text-gray-200">Donate</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 