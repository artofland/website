import colors from 'vuetify/es5/util/colors'


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Buy and Sell Metaverse Land',
    title: 'Artof.Land',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Let your creativity take over, build without limit in your metaverse. Play with friends and the whole world, buy and sell LAND NFT' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-title', property: 'og:site_name', content: 'Artof.Land Buy and Sell Metaverse Land' },
      { hid: 't-type', property: 'twitter:title', content: 'Artof.Land Buy and Sell Metaverse Land' },
      { hid: 't-type', property: 'twitter:image:src', content: 'https://artof.land/img/background-header.png' },
      { hid: 't-type', property: 'twitter:image:alt', content: 'Artof.Land Buy and Sell Metaverse Land' },
      { hid: 'og-title', property: 'og:title', content: 'Artof.Land Buy and Sell Metaverse Land' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-desc', property: 'og:description', content: 'Let your creativity take over, build without limit in your metaverse. Play with friends and the whole world' },
      { hid: 'og-image', property: 'og:image',
        content: 'https://artof.land/img/background-header.png'
      },
      { hid: 'og-url', property: 'og:url', content: 'https://artof.land' },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },



    ],
    script:[
      // {src:'https://unpkg.com/@metamask/legacy-web3@latest/dist/metamask.web3.min.js'},
      {src:'https://cdn.jsdelivr.net/npm/@metamask/legacy-web3@2.0.0/dist/metamask.web3.min.js'},
      {src:'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js'},
      // {src:'https://unpkg.com/aos@2.3.1/dist/aos.js'}
      {src:'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      // { rel: 'stylesheet', href: '//unpkg.com/leaflet@1.8.0/dist/leaflet.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.8.0/leaflet.css' },
      // { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/vue-konva.js', mode:'client'},
    {src:'~/plugins/vue2-leaflet.js', mode:'client'},
    {src: "~/plugins/aos.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    runtime: true // Support `$md()`
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon:{
      fileName:'favicon.png'
    },
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#C6FF08",
          accent: "#4DA3ED",
          secondary: "#353D45",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
