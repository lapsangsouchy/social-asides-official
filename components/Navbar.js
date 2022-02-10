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
      <div className={navStyles.navRight}></div>
    </div>
  );
};

export default Navbar;
