import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import Image from 'next/image';
import SiteLogo from '../public/s-a-logo.svg';

const Navbar = () => {
  return (
    <div className={navStyles.nav}>
      <div className={navStyles.navLeft}>
        <Link href='/'>
          <a>
            <Image src={SiteLogo} alt='site logo' width={200} height={100} />
          </a>
        </Link>
      </div>
      <div className={navStyles.navCenter}>
        <ul className={navStyles.navList}>
          <li className={navStyles.navListItem}>
            <Link href='/'>HOME</Link>
          </li>
          <li className={navStyles.navListItem}>
            <Link href='/about'>ABOUT</Link>
          </li>
        </ul>
      </div>
      <div className={navStyles.navRight}></div>
    </div>
  );
};

export default Navbar;
