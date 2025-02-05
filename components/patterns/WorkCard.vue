<template>
  <div class="work-card">
    <card-image
      class="card-image"
      :image-src="'/images/torus-desktop.jpg'"
      :alt-text="'Torus website on laptop screen'"
    />
    <div class="card-content">
      <h3 class="title">Torus</h3>
    </div>
  </div>
</template>

<style scoped>
  .work-card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>