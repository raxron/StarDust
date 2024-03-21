
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-12 text-white fixed top-0 left-0 right-0 w-full">
      <Link href="/">
        <Image src="/assets/logo/stardustLogo.svg" className='hover:scale-110 transition-transform' width={100} height={100} alt="Logo" />
      </Link>
      <div className='hover:scale-110 transition-transform'>
        <a href="/form" >
          Your Horoscopes
        </a>
      </div>
    </div>
  );
}
