import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-row items-center p-12 text-white fixed bottom-0 left-0 right-0 w-full">
      
      <div className={'flex flex-col items-center'}>
      <Link href="/">
        <Image src="/assets/logo/wordmark.png" width={100} height={100} alt="Logo" />
      </Link>
      </div>
    </div>
  );
}
