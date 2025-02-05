<template>
  <inline-svg
    class="icon"
    :src="iconSrc"
    :aria-hidden="!title"
    :role="!title ? 'img' : null"
    :title="title"
    focusable="false"
  />
</template>

<script setup>
  import InlineSvg from 'vue-inline-svg';

  defineProps({
    /**
     * Image source
     */
    iconSrc: {
      type: String,
      default: ''
    },
    /**
     * Leave blank if description comes from somewhere else.
     */
    title: {
      type: String,
      default: ''
    }
  });
</script>

<style scoped lang="scss">
  .icon {
    display: inline-block;
  }
</style>
