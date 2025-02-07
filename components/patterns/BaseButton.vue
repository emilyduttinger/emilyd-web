<template>
  <component 
    :is="componentType" 
    :class="['btn', `btn-${theme}`]"
    v-bind="btnLinkProps"
    @click="clickHandler"
  >
    <span class="label">
      <slot />
    </span>
    <icon
      v-if="showIcon"
      class="icon"
      :icon-src="iconPath"
    />
  </component>
</template>

<script setup>
  const props = defineProps({
    /**
     * Button theme
     */
    theme: {
      type: String,
      default: 'primary'
    },
    /**
     * Path to follow on click.  Renders a link element instead of button
     */
    linkPath: {
      type: String,
      default: ''
    },
    /**
     * Defines whether this is an external link.  If true, renders an 'a' tag.  If false, renders router-link or nuxt-link (if supporting "to" prop exists)
     */
     externalLink: {
      type: Boolean,
      default: false
    },
    /**
     * show the icon
     */
     showIcon: {
      type: Boolean,
      default: true
    },
    /**
     * Icon URL
     */
    iconPath: {
      type: String,
      default: '/svg/arrow-right.svg'
    },
    /**
     * Whether to render a div instead of a button or anchor
     */
    renderDiv: {
      type: Boolean,
      default: false
    }
  })

  // Computed Properties

  const componentType = computed(() => {
    if (props.linkPath) {
      if (props.externalLink || isAnchorLink.value) {
        return 'a';
      }
      return resolveComponent('nuxt-link');
    } else if (props.renderDiv) {
      return 'div';
    }

    return 'button';
  });

  const isAnchorLink = computed(() => {
    return typeof props.linkPath === 'string' && props.linkPath.startsWith('#');
  });

  const btnLinkProps = computed(() => {
    const linkProps = {};

    if (props.linkPath) {
      if (props.externalLink) {
        linkProps.href = props.linkPath;
        linkProps.target = '_blank';
      } else if (isAnchorLink.value) {
        linkProps.href = props.linkPath;
        linkProps.target = props.target;
      } else {
        linkProps.to = props.linkPath;
      }
    }

    return linkProps;
  });

  // Methods

  /**
   * Click Event Handler
   * @param {PointerEvent} event
   */

   const clickHandler = (event) => {
    if (isAnchorLink.value === true) {
      // Prevent default anchor behavior, but only if the click is on an anchor link
      event.preventDefault();
      // Smooth scroll to the anchor element
      const scrollToElement = document.querySelector(props.linkPath);
      if (scrollToElement !== null) {
        window.scrollTo({
          top: scrollToElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      }
    }
  };
</script>