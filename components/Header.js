import Image from 'next/image';
import SiteLogo from '../public/s-a-logo.svg';
import styles from '../styles/Home.module.css';

const Header = ({ settings }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitleContainer}>
        <Image
          className={styles.headerImg}
          src={settings.cover_image}
          height={500}
          width={1080}
          alt='Logo'
        />
        <span className={styles.headerTitle}>
          <Image
            src={SiteLogo}
            className='headerTitle'
            width={800}
            height={200}
            alt='site logo'
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
