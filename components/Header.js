import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Header = ({ settings }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitleContainer}>
        <span className={styles.headerTitle}>Social Asides</span>
      </div>
      <Image
        className={styles.headerImg}
        src={settings.cover_image}
        height={450}
        width={1080}
        alt='Logo'
      />
    </div>
  );
};

export default Header;
