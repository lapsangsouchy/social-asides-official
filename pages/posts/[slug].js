import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSinglePost, getPosts } from '../../lib/posts';
import singlePostStyles from '../../styles/SinglePost.module.css';

const PostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={singlePostStyles.singlePost}>
      <p className={singlePostStyles.goback}>
        <Link href='/'>
          <a>Go Back</a>
        </Link>
      </p>
      <div className={singlePostStyles.singlePostWrapper}>
        {post.feature_image && (
          <Image
            src={post.feature_image}
            className={singlePostStyles.singlePostImg}
            width={800}
            height={500}
            // layout='responsive'
            alt='feature image'
          />
        )}
        <h1 className={singlePostStyles.singlePostTitle}>{post.title}</h1>
        <div
          className={singlePostStyles.singlePostDesc}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 1,
  };
}
