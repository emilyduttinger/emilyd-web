<template>
  <div class="underline-text">
    <slot />
    <inline-svg
      class="underline"
      :src="'/svg/underline.svg'"
      :aria-hidden="true"
      focusable="false"
    />
  </div>
</template>

<script setup>
  import InlineSvg from 'vue-inline-svg';
</script>

<style scoped>
  .underline-text {
    position: relative;
    display: inline-block;
  }

  .underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
  }
</style>