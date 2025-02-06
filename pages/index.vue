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
          <p class="learning"><underline-svg>Currently Learning</underline-svg> &nbsp;&nbsp;&mdash;&nbsp;&nbsp; React<span>/</span>Shopify Hydrogen + Oxygen</p>
        </div>
      </div>
      <div id="work" class="work-grid">
        <work-card :title="'xpel'" />
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
    font-weight: 700;

    .underline-text {
      padding-bottom: 0.1em;
    }

    span {
      margin: 0 0.5rem;
    }
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