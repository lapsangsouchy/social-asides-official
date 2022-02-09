import styles from '../styles/Home.module.css';
import Posts from '../components/Posts';
import { getPosts } from '../lib/posts';
import { getSettings } from '../lib/settings';
import Link from 'next/link';
import Header from '../components/Header';

const Home = ({ posts, settings }) => {
  return (
    <>
      <Header settings={settings} />
      <div className={styles.home}>
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps(context) {
  const posts = await getPosts();
  const settings = await getSettings();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, settings },
    revalidate: 1,
  };
}
