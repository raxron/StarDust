
import Image from 'next/image';
import styles from '../../components/navbar/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <Image src="/assets/logo/stardustLogo.svg" width={100} height={100} alt="Logo" />
      </Link>

      <div >
        <a href="/" >
          Your Horoscopes
        </a>
      </div>


    </div>
  );
}
