<template>
  <header>
    <span class="heading-3 logo-heading">EmilyD</span>
    <navigation />
  </header>
</template>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem var(--container-padding);
    text-align: center;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    @media (min-width: 1024px) {
      padding: 1.5rem 2.5rem;
    }
  }

  .logo-heading {
    margin: 0;
  }
</style>