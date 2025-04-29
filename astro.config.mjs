// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

export default defineConfig({
  redirects: {
    // socials
    '/bsky': 'https://bsky.app/profile/soren.rocks',
    '/discord': 'https://discord.com/users/525050108966993920',
    '/github': 'https://github.com/sorenrocks',
    '/telegram': 'https://t.me/sorenrocks',
    '/twitter': 'https://twitter.com/sorenrocks',

    // other
    '/refs': 'https://drive.google.com/drive/folders/1m2yGpN1UeGEGOsTOthRqPdLm1SSQaL1I',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
})
