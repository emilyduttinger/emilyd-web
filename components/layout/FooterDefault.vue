<template>
  <footer>
    <navigation />
    <p class="copyright">&copy; Emily Duttinger 2025</p>
  </footer>
</template>

<style scoped>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1.5rem;
    padding: 1.5rem var(--container-padding);

    @media (min-width: 768px) {
      text-align: left;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    @media (min-width: 1024px) {
      padding: 1.5rem 2.5rem;
    }
  }

  .copyright {
    margin: 0;
    font-size: 1rem;
  }
</style>