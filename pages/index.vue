<template>
  <div class="index">
    <container>
      <div class="intro">
        <div class="intro-text">
          <h1>I build user-focused websites with a passion for clean code and elegant design</h1>
          <p class="large">Hi, I'm Emily Duttinger. I'm a <underline-svg>Front-End UI Developer</underline-svg> specializing in creating engaging and accessible web experiences. I'm a firm believer in the power of design systems to create scalable and consistent user interfaces.</p>
          <base-button
            :link-path="'#work'"
          >
            View My Work
          </base-button>
        </div>
        <div class="toolkit">
          <h2 class="heading-6">My Toolkit</h2>
          <ul class="toolkit-list unstyled-list">
            <li class="heading-3">Vue JS</li>
            <li class="heading-3">Nuxt JS</li>
            <li class="heading-3">JavaScript</li>
            <li class="heading-3">Shopify Development</li>
            <li class="heading-3">Liquid</li>
            <li class="heading-3">Git</li>
            <li class="heading-3">HTML5 + CSS3</li>
            <li class="heading-3">Sass + Less</li>
            <li class="heading-3">Design Systems</li>
            <li class="heading-3">Accessibility</li>
            <li class="heading-3">UX/UI Design</li>
            <li class="heading-3">Figma</li>
            <li class="heading-3">Adobe Creative Suite</li>
          </ul>
        </div>
      </div>
      <div id="work" class="work-grid">
        <work-card />
        <work-card />
        <work-card />
        <work-card />
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
  }

  .intro-text {
    max-width: 80ch;
  }

  .toolkit {
    margin-top: var(--stacked-component-lg);
  }

  .toolkit-list li {
    display: inline-block;
  }

  .toolkit-list li:not(:last-child):after {
    content: '/';
    display: inline-block;
    margin: 0 1rem;
  }

  .work-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-top: var(--stacked-component-lg);

    @media (min-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
      gap: 3rem;
    }
  }
</style>