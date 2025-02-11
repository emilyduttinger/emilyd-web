<template>
  <video
    v-if="videoUrl && lazy"
    ref="lazyVideo"
    class="video"
    :class="{ 'fade-video': fade }"
    :autoplay="autoplay"
    :loop="loop"
    :muted="muted"
    :playsinline="playsinline"
    :poster="poster"
    :style="fadeStyle"
    :controls="controls"
    @play="emit('play')"
    @pause="emit('pause')"
  >
    <source
      :data-src="videoUrl"
      :type="videoType"
    >
  </video>
  <video
    v-else-if="videoUrl"
    ref="videoPlayer"
    class="video"
    :autoplay="autoplay"
    :loop="loop"
    :muted="muted"
    :playsinline="playsinline"
    :poster="poster"
    :controls="controls"
    @play="emit('play')"
    @pause="emit('pause')"
  >
    <source
      :src="videoUrl"
      :type="videoType"
    >
  </video>
</template>

<script setup>
  /**
   * Core video component that is meant to display inline and autoplay on mobile, with no controls.
   * Has support for lazy loading by default. `loaded` event is emitted once video has lazy loaded.
   */

  // Props

  const props = defineProps({
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
    },
    /**
     * URL of the video to display
     */
    videoUrl: {
      type: String,
      required: true
    },
    /**
     * Whether or not to autoplay the video
     */
    autoplay: {
      type: Boolean,
      default: true
    },
    /**
     * Whether or not to loop the video
     */
    loop: {
      type: Boolean,
      default: true
    },
    /**
     * Whether or not to mute the video
     */
    muted: {
      type: Boolean,
      default: true
    },
    /**
     * An image to display while the video loads
     */
    poster: {
      type: String,
      default: ''
    },
    /**
     * Whether or not the video should play inline (must be true to autoplay at mobile)
     */
    playsinline: {
      type: Boolean,
      default: true
    },
    /**
     * Type of video src
     */
    videoType: {
      type: String,
      default: 'video/mp4'
    },
    /**
     * Whether or not to display the default video controls
     */
    controls: {
      type: Boolean,
      default: false
    }
  });

  // Refs
  const videoPlayer = ref();

  // Emits
  const emit = defineEmits(['load', 'loaded', 'play', 'pause']);

  // Reactive state
  const { el: lazyVideo } = useLazyLoad(
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

  // Expose
  defineExpose({ lazyVideo, videoPlayer });
</script>

<style scoped lang="scss">
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &.lazy-video.fade-video {
      opacity: 0;

      &.video-loaded {
        opacity: 1;
      }
    }
  }
</style>
