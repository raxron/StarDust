import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-row p-12  w-full justify-between items-center ">
      <Link href="/">
        <Image src="/assets/logo/wordmark.png" width={150} height={150} alt="wordmark" />
      </Link>
      <h1>Copyright © 2024 – All rights reserved</h1>
    </div>
  );
}