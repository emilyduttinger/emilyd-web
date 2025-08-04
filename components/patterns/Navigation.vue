<template>
  <ul class="unstyled-list navigation-menu">
    <li><a href="/pdf/EmilyDuttingerResume.pdf" target="_blank">resume</a></li>
    <li><a href="https://www.linkedin.com/in/emily-duttinger-2882a765/" target="_blank">linkedin</a></li>
    <li><a href="mailto:emilyduttinger@gmail.com">email</a></li>
  </ul>
</template>

<style scoped>
  .navigation-menu li {
    display: inline-block;

    &:not(:last-child):after {
      content: '/';
      display: inline-block;
      margin: 0 1rem;
    }
  }
</style>