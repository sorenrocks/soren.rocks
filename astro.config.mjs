// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  redirects: { 
      '/bsky': 'https://bsky.app/profile/soren.rocks',
      '/github': 'https://github.com/sorenrocks',
      '/twitter': 'https://twitter.com/sorenrocks',
      '/refs': 'https://drive.google.com/drive/folders/1m2yGpN1UeGEGOsTOthRqPdLm1SSQaL1I'
    },
});
