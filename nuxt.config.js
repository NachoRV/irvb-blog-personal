import META_INFO from './constants/meta'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head : {
    title : 'IRVB Blog Personal',
    meta  : META_INFO,
    link  : [
      { rel : 'icon', type : 'image/x-icon', href : '/favicon.ico' },
      {
        rel  : 'stylesheet',
        href : 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&display=swap'
      },
      {
        rel  : 'stylesheet',
        href : 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap'
      },
      {
        rel  : 'stylesheet',
        href : 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;700;900&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css : [
    '~/assets/css/normalize.css',
    '~layouts/global.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins : [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components : true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules : [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules : [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],
  // Google Analitics
  googleAnalytics : {
    id : 'UA-185378495-1'
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content : {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build : {
  },
  server : {
    port : 8080, // default: 3000
    host : '0.0.0.0' // default: localhost
  }
}
