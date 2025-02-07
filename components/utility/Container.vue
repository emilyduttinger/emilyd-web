<template>
  <div :class="['container', {'container-full': fullWidth}]">
    <slot />
  </div>
</template>

<script setup>
  defineProps({
    /**
     * Determine if container is full width
     */
    fullWidth: {
      type: Boolean,
      default: false
    }
  });
</script>

<style scoped>
  .container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    max-width: calc(var(--container-width) + var(--container-padding) * 2);
    padding-right: var(--container-padding);
    padding-left: var(--container-padding);

    &.container-full {
      max-width: 100%;
    }
  }
</style>
