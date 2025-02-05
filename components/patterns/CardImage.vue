<template>
  <div>
    <img
      v-if="lazy"
      ref="lazyImage"
      :data-src="imageSrc"
      :src="defaultImage"
      :alt="altText"
      :srcset="srcset"
      :sizes="sizes"
      :class="[imageClass, { 'fade-image': fade }]"
      :style="fadeStyle"
    />
    <img
      v-else
      :src="imageSrc"
      :alt="altText"
      :srcset="srcset"
      :sizes="sizes"
      :class="imageClass"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
    /**
     * Path of image to display
     */
    imageSrc: {
      type: String,
      default: ''
    },
    /**
     * SrcSet Attribute
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset
     */
    srcset: {
      type: String,
      default: ''
    },
    /**
     * Sizes Attribute
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes
     */
    sizes: {
      type: String,
      default: '100vw'
    },
    /**
     * Class to be attached to image
     */
    imageClass: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Optional image caption
     */
    imageCaption: {
      type: String,
      default: ''
    },
    /**
     * Alternative text to display for the image
     */
    altText: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Default image to show
     */
    defaultImage: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
    },
    /**
     * Whether or not the image should lazy load
     */
    lazy: {
      type: Boolean,
      default: true
    },
    /**
     * Whether or not to fade the element in if/when lazy loaded
     */
    fade: {
      type: Boolean,
      default: true
    },
    /**
     * Easing function of fade transition
     */
    fadeEasing: {
      type: String,
      default: 'ease-out'
    },
    /**
     * Length in seconds of fade transition
     */
    fadeDuration: {
      type: String,
      default: '0.4'
    },
    /**
     * Root Margin value to use for the intersection observer that handles lazy loading
     */
    rootMargin: {
      type: String,
      default: '400px'
    }
  });

  // Emits

  const emit = defineEmits(['load', 'loaded']);

  // Reactive State

  const { el: lazyImage } = useLazyLoad(
    {
      disableFade: !props.fade,
      root: null,
      rootMargin: props.rootMargin,
      threshold: 0
    },
    emit
  );

  // Computed Properties

  const fadeStyle = computed(() => `transition: opacity ${props.fadeDuration}s ${props.fadeEasing}`);
</script>

<style scoped>
  img {
    width: 100%;

    &.lazy-image.fade-image {
      opacity: 0;

      &.img-loaded {
        opacity: 1;
      }
    }
  }
</style>
