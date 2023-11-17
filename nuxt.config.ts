// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '黑新星 | 2024 競選官方網站',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '喵喵權益我帶頭，我為喵民力爭上游。' },
        { name: 'theme-color', content: '#a8c400' },
        { property: 'og:title', content: '黑新星 | 2024 競選官方網站' },
        { property: 'og:description', content: '喵喵權益我帶頭，我為喵民力爭上游。' },
        { property: 'og:url', content: 'https://jcsamoyed.github.io/F2E-2023-mission1' },
      ],
    },
  },
  css: ['~/assets/css/main.scss'],
  plugins: [
    { src: '@/plugins/aos.js', ssr: false },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/variables.scss" as *;',
        },
      },
    },
  },
});
