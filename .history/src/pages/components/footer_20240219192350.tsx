import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-col p-12 bg-white w-full items-center">
      <Link href="/">
        <Image src="/assets/logo/wordmark.png" width={100} height={100} alt="Logo" />
      </Link>
      <div className={'flex flex-col items-center'}>
      
      </div>
    </div>
  );
}
