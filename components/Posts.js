import Post from './Post';
import postStyles from '../styles/Posts.module.css';
import Link from 'next/link';

const Posts = ({ posts }) => (
  <div className={postStyles.posts}>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

export default Posts;
