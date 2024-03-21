import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-col p-12 w-full justify-between items-center gap-10">
      <Link href="/">
        <Image src="/assets/logo/wordmark.svg" width={200} height={200} alt="wordmark" />
      </Link>
      <h1 className='text-white'>Copyright © 2024 – All rights Reserved</h1>
    </div>
  );
}
