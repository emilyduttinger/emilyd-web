<template>
  <div>
    <nuxt-route-announcer />
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<style>
  /**
   * Page Transition Styles
   * Transition applies when switching between pages that use the same <nuxt-layout>.
   * Only transitions elements nested inside <nuxt-page>, <nuxt-layout> does not transition.
   * https://nuxt.com/docs/getting-started/transitions#page-transitions
   */
  .page-enter-active,
  .page-leave-active {
    transition:
      opacity 0.3s ease,
      filter 0.3s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  /**
   * Layout Transition Styles
   * Transition applies when switching between pages that use different a <nuxt-layout>.
   * Transitions everything nested inside of <nuxt-layout>.
   * https://nuxt.com/docs/getting-started/transitions#layout-transitions
   */
  .layout-enter-active,
  .layout-leave-active {
    transition:
      opacity 0.3s ease
      filter 0.3s ease;
  }

  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>