<template>
  <div 
    ref="workCard"
    :class="['work-card', {'fade-in': fadeCard}]"
  >
    <a class="card-image-link unstyled-link" :href="urlArray.length > 0 ? urlArray[0] : url" target="_blank">
      <card-media
        class="card-image"
        :image-src="imageSrc"
        :video-url="videoUrl"
        :alt-text="imageAlt || ''"
      />
      <div class="hover-content">
        <base-button
          v-if="url || urlArray.length > 0"
          :render-div="true"
        >
          Visit Website
        </base-button>
        <span v-else class="heading-4">Coming Soon</span>
      </div>
      <div class="tags">
        <span 
          v-for="(tag, index) in tags"
          :key="`tag-${index}`"
          class="heading-6 tag"
        >
          {{ tag }}
        </span>
      </div>
    </a>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-table">
        <div class="row">
          <p v-if="urlArray.length > 0" class="heading-6">URLs</p>
          <p v-else class="heading-6">URL</p>
          <ul v-if="urlArray.length > 0" class="url-list">
            <li 
              v-for="(item, index) in urlArray"
              :key="`url-${index}`"
            >
              <a :href="item" target="_blank"><strong>{{ item.replace('https://',"") }}</strong></a>
            </li>
          </ul>
          <p v-else>
            <a v-if="url" :href="url" target="_blank"><strong>{{ url.replace('https://',"") }}</strong></a>
            <span v-else>Coming Soon</span>
          </p>
        </div>
        <div class="row">
          <p class="heading-6">Details</p>
          <p>{{ details }}</p>
        </div>
        <div class="row">
          <p class="heading-6">Role</p>
          <p>{{ role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    /**
     * Image Src
     */
    imageSrc: {
      type: String,
      default: ''
    },
    /**
     * Image Alt Text
     */
    imageAlt: {
      type: String,
      default: ''
    },
    /**
     * URL to an mp4 video to autoplay or embed
     */
    videoUrl: {
      type: String,
      default: ''
    },
    /**
     * Title
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * Details
     */
    details: {
      type: String,
      default: ''
    },
    /**
     * Project Role
     */
    role: {
      type: String,
      default: ''
    },
    /**
     * Website URL
     */
    url: {
      type: String,
      default: ''
    },
    /**
     * Array of URLs to link to multple pages or sites
     */
    urlArray: {
      type: Array,
      default: () => []
    },
    /**
     * Website URL
     */
    tags: {
      type: Array,
      default: () => []
    }
  });

  // Template Refs
  const workCard = ref(null);
  const fadeCard = ref(false);

  // Intersection observer for card fade-in animation
  useIntersectionObserver(
    workCard,
    ([{ isIntersecting }]) => {
      fadeCard.value = isIntersecting;
    },
    { threshold: 0.0 }
  );
</script>

<style scoped>
  .work-card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    opacity: 0;
    transform: translateY(1rem);
    transition: opacity 0.3s ease-in 0.2s;

    &.fade-in {
      opacity: 1;
    }
  }

  .card-image-link {
    position: relative;
    text-decoration: none;
    color: var(--text-primary);

    .card-image {
      transition: opacity .3s cubic-bezier(.455,.03,.515,.955);
    }

    .hover-content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s cubic-bezier(.455,.03,.515,.955);
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(2px);
    }

    &:hover, &:focus-visible {
      .hover-content {
        opacity: 1;
      }

      .card-image {
        opacity: 0.7;
      }
    }
  }

  .tags {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem;

    .tag {
      padding: 0.5rem 0.75rem;
      margin: 0;
      background-color: var(--background-primary);
      color: var(--text-primary);
      display: flex;
      align-items: center;
      border-radius: 2rem;
      font-size: 0.875rem;
    }
  }

  .card-title {
    margin-bottom: 0;
  }

  .card-table {
    border-top: 1px solid var(--border-primary);
    margin-top: 1.5rem;

    .row {
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      gap: 0.75rem;
      border-bottom: 1px solid var(--border-primary);

      .heading-6 {
        margin: 0;
      }

      @media (min-width: 600px) {
        flex-direction: row;

        p:first-child {
          width: 30%;
        }

        p:last-child {
          width: 70%;
        }
      }
    }
  }

  .url-list {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0;

      & + li {
        margin-top: 0.25rem;
      }
    }
  }
</style>