<template>
  <ul class="unstyled-list navigation-menu">
    <li><a href="">resume</a></li>
    <li><a href="">github</a></li>
    <li><a href="">linkedin</a></li>
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