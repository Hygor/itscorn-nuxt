<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 68rem;
  max-width: 90%;
  margin: 1.6rem auto;
}
</style>