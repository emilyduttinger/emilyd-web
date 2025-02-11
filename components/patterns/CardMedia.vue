<template>
  <div class="media-wrapper">
    <video-player
      v-if="videoUrl"
      :video-url="videoUrl"
      :poster="imageSrc"
      :display-icons="false"
    />
    <base-image
      v-else
      :image-src="imageSrc"
      :alt-text="altText || ''"
    />
  </div>
</template>

<script setup>
  defineProps({
    /**
     * Path of image to display
     */
    imageSrc: {
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
     * URL to an mp4 video to autoplay or embed
     */
     videoUrl: {
      type: String,
      default: ''
    }
  });
</script>