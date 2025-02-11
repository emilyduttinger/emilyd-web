<template>
  <div class="index">
    <container>
      <div class="intro">
        <div class="intro-text">
          <h1>I build user-focused websites with a passion for clean code and elegant design</h1>
          <p class="large">Hi, I'm Emily Duttinger. I'm a <strong>Front-End UI Developer</strong> specializing in creating engaging and accessible web experiences. I'm a firm believer in the power of design systems to create scalable and consistent user interfaces.</p>
          <base-button
            :link-path="'#work'"
            :icon-path="'/svg/arrow-down.svg'"
            class="icon-arrow-down"
          >
            View My Work
          </base-button>
        </div>
        <div class="toolkit">
          <h2 class="heading-6">My Toolkit</h2>
          <ul class="toolkit-list unstyled-list">
            <li class="heading-4">Vue JS</li>
            <li class="heading-4">Nuxt JS</li>
            <li class="heading-4">JavaScript</li>
            <li class="heading-4">TypeScript</li>
            <li class="heading-4">Shopify Development</li>
            <li class="heading-4">Liquid</li>
            <li class="heading-4">Git</li>
            <li class="heading-4">HTML5 + CSS3</li>
            <li class="heading-4">Sass + Less</li>
            <li class="heading-4">Design Systems</li>
            <li class="heading-4">Accessibility</li>
            <li class="heading-4">UX/UI Design</li>
            <li class="heading-4">Figma</li>
            <li class="heading-4">Adobe Creative Suite</li>
          </ul>
          <p class="learning"><strong>Currently Learning</strong> &nbsp;&nbsp;&mdash;&nbsp;&nbsp; React<span>/</span>Shopify Hydrogen + Oxygen</p>
        </div>
      </div>
    </container>
    <container :full-width="true">
      <div id="work" class="work-grid">
        <work-card 
          :title="'XPEL'" 
          :image-src="'/images/torus-desktop.jpg'"
          :details="'A headless e-commerce platform powered by Vue 3 and Nuxt 3. Integrated with BigCommerce and Contentstack for robust product management and content delivery.'"
          :role="'Lead UI Developer, Technical Director'"
          :tags="['Vue 3', 'Nuxt 3', 'Headless']"
        />
        <work-card 
          :title="'Torus'" 
          :image-src="'/images/torus-desktop.jpg'"
          :url="'https://torus.co'"
          :details="'An expansive modular design system with a flexible library of components that adapts to evolving content needs. Built on a headless architecture using Vue 3, Nuxt 3 and Dato CMS.'"
          :role="'Lead UI Developer, Technical Director'"
          :tags="['Vue 3', 'Nuxt 3', 'Headless']"
        />
        <work-card 
          :title="'MATCH Pewter'" 
          :video-url="'/video/Match.mp4'"
          :url="'https://match1995.com'"
          :details="'An elevated e-commerce experience with a composable design system built on Shopify 2.0, resulting in a 58% year-over-year revenue growth and a 48% increase in conversion rates.'"
          :role="'Lead UI Developer, Technical Director'"
          :tags="['Shopify']"
        />
        <work-card 
          :title="'Great Lakes Wellness'" 
          :image-src="'/images/torus-desktop.jpg'"
          :url="'https://greatlakeswellness.com'"
          :details="'A custom theme with a versatile design system and a rich component library built on Shopify 2.0.'"
          :role="'Lead UI Developer, Technical Director'"
          :tags="['Shopify']"
        />
        <work-card 
          :title="'Charming Group'" 
          :image-src="'/images/torus-desktop.jpg'"
          :url="'https://charminggroup.com'"
          :details="'A headless web application built with Vue 2 and Nuxt 2, featuring engaging animations powered by GSAP.'"
          :role="'Lead UI Developer'"
          :tags="['Vue 2', 'Nuxt 2', 'Headless', 'GSAP']"
        />
        <work-card 
          :title="'Howler Brothers'" 
          :video-url="'/video/Howler.mp4'"
          :url="'https://howlerbros.com'"
          :details="'A vibrant Shopify 2.0 e-commerce experience showcasing the brand\'\s unique artwork. A custom, composable design system, powered by CSS variables, ensures brand adaptability.'"
          :role="'Lead UI Developer'"
          :tags="['Shopify']"
        />
        <work-card 
          :title="'Yeti Cycles'" 
          :image-src="'/images/torus-desktop.jpg'"
          :url-array="['https://yeticycles.com/technology/sixfinity', 'https://yeticycles.com/technology/switch-infinity','https://yeticycles.com/technology', ]"
          :details="'An immersive web experience featuring rich GSAP and Vue animations, including scroll-driven video. Built on a headless architecture using Vue 2, Nuxt 2, BigCommerce and Prismic CMS.'"
          :role="'Component + Animation UI Development'"
          :tags="['Vue 2', 'Nuxt 2', 'Headless', 'GSAP']"
        />
        <work-card 
          :title="'WS Development'" 
          :image-src="'/images/ws-development_garden-city-center-home.jpg'"
          :url-array="['https://gardencitycenter.com', 'https://thestreetchestnuthill.com', 'https://theshopsatfarmingtonvalley.com', 'https://highlandvillagejxn.com', 'https://hilldale.com']"
          :details="'WordPress multisite network of 8 websites built on a robust design system with shared components, unique branding and animations.'"
          :role="'Lead UI Developer, Technical Director'"
          :tags="['Wordpress', 'Animation']"
        />
      </div>
    </container>
  </div>
</template>

<style scoped>
  .index {
    padding: var(--stacked-component-lg) 0;
  }

  .intro {
    min-height: calc(100vh - var(--header-height) - var(--stacked-component-lg) * 2);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .btn {
      margin-top: var(--heading-margin);
    }
  }

  .intro-text {
    max-width: 80ch;
  }

  .toolkit {
    margin-top: var(--stacked-component-lg);
  }

  .toolkit-list {
    margin-bottom: var(--gap-vertical);

    li {
      display: inline-block;
      margin: 0;
      line-height: 1.7em;

      &:not(:last-child):after {
        content: '/';
        display: inline-block;
        margin: 0 1rem;
      }

      @media (min-width: 1024px) {
        font-size: 2rem;
      }
    }
  }

  .learning {
    span {
      margin: 0 0.5rem;
    }
  }

  .work-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-top: var(--stacked-component-lg);

    @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
      gap: 3.5rem;
    }
  }
</style>