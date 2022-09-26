<template>
  <picture>
    <img src="/its-corn.webp" alt="it's corn, I can tell you more about it">
  </picture>
</template>

<style lang="scss" scoped>
picture {
  height: 32rem;
  margin: 1.5rem 0;
  box-shadow: 0 1rem 1rem rgba(85, 107, 47, 0.2), 1rem 1rem 1rem rgba(255, 255, 255, 1) inset;
  border-radius: 2rem;
  overflow: hidden;
}

img {
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: 50% 25%;
}
</style>