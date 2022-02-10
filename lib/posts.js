import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.BLOG_URL,
  key: process.env.CONTENT_API_KEY,
  version: 'v3',
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'authors',
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
