import styles from '../styles/Home.module.css';
import { getPosts } from '../lib/posts';
import Link from 'next/link';

const Index = (props) => (
  <ul>
    {props.posts.map((post) => (
      <li key={post.id}>
        <Link href={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Index;

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 1,
  };
}
