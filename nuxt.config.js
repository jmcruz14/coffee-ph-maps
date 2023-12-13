// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  preset: 'node-server',
  devtools: { enabled: true },
  ssr: true,
  spaLoadingTemplate: false,
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  image: {
    dir: 'assets/images',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
      '3xl': 1920,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Serif:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900&display=swap',
          media: 'none',
          onload: "if(media!='all')media='all'",
        }
      ]
    }
  }
})
