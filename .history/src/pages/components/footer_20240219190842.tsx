import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex justify-between items-center p-12 text-white fixed bottom-0 left-0 right-0 w-full">
      <Link href="/">
        <Image src="/assets/logo/stardustLogo.svg" width={100} height={100} alt="Logo" />
      </Link>
      <div >
        
      </div>
    </div>
  );
}
