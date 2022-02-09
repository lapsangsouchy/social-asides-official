import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
  return (
    <div className={navStyles.nav}>
      <div className={navStyles.navLeft}>
        <p>Social Asides</p>
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
      <div className={navStyles.navRight}>
        <ul className={navStyles.navList}>
          <li className={navStyles.navListItem}>
            <Link href='#'>
              <a>LOGIN</a>
            </Link>
          </li>
          <li className={navStyles.navListItem}>
            <Link href='#'>
              <a>REGISTER</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
