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

    // games
    '/steam': 'https://steamcommunity.com/id/sorenrocks',
    '/vrc': 'https://vrchat.com/home/user/usr_179f1564-6a93-48c5-b51b-c436e1241f77',
    '/bl': 'https://beatleader.com/u/76561198838652679',
    '/ss': 'https://scoresaber.com/u/76561198838652679',
    '/ssr': 'https://ssr.fascinated.cc/player/76561198838652679',

    // other
    '/refs': 'https://drive.google.com/drive/folders/1m2yGpN1UeGEGOsTOthRqPdLm1SSQaL1I',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
})
