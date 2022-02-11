import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Social Asides</title>
        <meta
          property='og:url'
          content='https://social-asides-official.vercel.app'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Social Asides Blog' />
        <meta property='og:image' content={'/s-a-cover.png'} />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
