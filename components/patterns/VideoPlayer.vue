<template>
  <div class="video-player" >
    <button
      v-if="displayIcons"
      class="video-player-icon-container"
      @click="playPause()"
    >
      <span class="visually-hidden">
        {{ isPlaying ? 'Pause Video' : 'Play Video' }}
      </span>
      <transition
        name="icon-fade"
        mode="out-in"
      >
        <icon
          v-if="isPlaying"
          class="icon"
          :icon-src="pauseIconSrc"
        />
        <icon
          v-else-if="!isPlaying"
          class="icon"
          :icon-src="playIconSrc"
        />
      </transition>
    </button>
    <base-video
      ref="videoParentRef"
      :video-url="videoUrl"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
      :playsinline="playsinline"
      :poster="poster"
      :lazy="lazy"
      :controls="controls"
      @loaded="onVideoLoaded"
      @play="updatePlaybackState(true)"
      @pause="updatePlaybackState(false)"
    />
  </div>
</template>

<script setup>

  // Props

  const props = defineProps({
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
    },
    /**
     * Whether or not the video should lazy load
     */
    lazy: {
      type: Boolean,
      default: true
    },
    /**
     * Whether or not icons should display on the player
     */
    displayIcons: {
      type: Boolean,
      default: true
    },
    /**
     * Optional path to play icon
     */
    playIconSrc: {
      type: String,
      default: '/svg/play.svg'
    },
    /**
     * Optional path to pause icon
     */
    pauseIconSrc: {
      type: String,
      default: '/svg/pause.svg'
    }
  });

  // Emits

  const emit = defineEmits(['loaded']);

  // Refs
  const videoParentRef = ref();
  const videoChildRef = ref();
  const isPlaying = ref(props.autoplay);
  const isLoaded = ref(false);

  // Composables
  const { focused: videoElementFocused } = useFocus(videoParentRef);

  const playPause = () => {
    videoChildRef.value.paused === true ? play() : pause();
  };

  /**
   * Set the ref for the <video> element in the <base-video> child component.
   */
  const onVideoLoaded = () => {
    /**
     * <base-video> has different refs depending on whether or not the lazy loaded prop is set on that child component.
     * Both elements refs are exposed on the <zr-video> component, and are accessible through videoParentRef.
     */
    videoChildRef.value = props.lazy ? videoParentRef.value.lazyVideo : videoParentRef.value.videoPlayer;
    // Move focus to the <video> element so that native play/pause functionality in maintained.
    videoElementFocused.value = true;
    // Set to true, to disable focus on the custom video play button, or video thumbnail button.
    isLoaded.value = true;
    // Emit loaded event to parent components.
    emit('loaded');
  };

  // Handle native video play/pause events
  const updatePlaybackState = (playbackState) => {
    isPlaying.value = playbackState;
  };

  const play = () => {
    if (isPlaying.value === false) {
      videoChildRef?.value?.play();
      isPlaying.value = true;
    }
  };

  const pause = () => {
    if (isPlaying.value === true) {
      videoChildRef?.value?.pause();
      isPlaying.value = false;
    }
  };
</script>

<style scoped lang="scss">
  .video-player {
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    padding: 0;
    margin: 0;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    aspect-ratio: 16 / 9;

    &-icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border: 1px solid var(--text-primary);
      border-radius: 100%;
      color: var(--text-primary);
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      background: transparent;

      .icon {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }

  .icon-fade-enter-active,
  .icon-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .icon-fade-enter,
  .icon-fade-leave-to {
    opacity: 0;
  }

  .icon {
    color: var(--text-primary);
  }
</style>
