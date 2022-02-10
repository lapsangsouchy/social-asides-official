import Image from 'next/image';
import Link from 'next/link';
import postStyles from '../styles/Posts.module.css';

const Post = ({ post }) => {
  return (
    <div className={postStyles.post}>
      {post.feature_image ? (
        <Link href={`/posts/${post.slug}`}>
          <a>
            <Image
              src={post.feature_image}
              className={postStyles.postImg}
              width={500}
              height={500}
              alt='Post Image'
            />
          </a>
        </Link>
      ) : (
        <Link href={`/posts/${post.slug}`}>
          <a>
            <Image
              src='/defaultpostimg.png'
              className={postStyles.postImg}
              width={500}
              height={500}
              alt='Post Image'
            />
          </a>
        </Link>
      )}
      <div className={postStyles.postInfo}>
        <Link href={`/posts/${post.slug}`}>
          <a>
            <span className={postStyles.postTitle}>{post.title}</span>
            {post.authors.map((author) => (
              <p className={postStyles.postAuthor} key={author.id}>
                <span style={{ color: 'black' }}>By</span> {author.name}
              </p>
            ))}
          </a>
        </Link>
        <p className={postStyles.postDesc}>{post.excerpt}</p>
      </div>
    </div>
  );
};

export default Post;
