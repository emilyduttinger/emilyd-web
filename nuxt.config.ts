// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk&display=swap' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  /**
   * Components
   * @see https://nuxt.com/docs/api/configuration/nuxt-config#components
   */
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  /**
   * CSS Configuration
   * @see https://nuxt.com/docs/api/configuration/nuxt-config#css
   */
  css: ['@/assets/styles/global.css'],

  /**
   * Nuxt Devtools
   * @see https://devtools.nuxtjs.org/guide#module-options
   */
  devtools: {
    enabled: true
  },

  /**
   * Auto Imports: Additional directories to auto-import
   * @see https://nuxt.com/docs/api/nuxt-config#imports
   */
  imports: {
    dirs: ['composables/**']
  },

  /**
   * Nuxt Modules
   * @see https://nuxt.com/docs/api/configuration/nuxt-config#modules
   */
  modules: ['@nuxt/eslint', '@vueuse/nuxt'],

  /**
   * Vue Router Options
   * @see https://nuxt.com/docs/api/nuxt-config#router
   * @see https://router.vuejs.org/api/interfaces/RouterOptions.html
   */
  router: {
    options: {
      strict: true
    }
  }
})
