import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.BLOG_URL,
  key: process.env.CONTENT_API_KEY,
  version: 'v3',
});

export async function getSettings() {
  return await api.settings.browse().catch((err) => {
    console.error(err);
  });
}
