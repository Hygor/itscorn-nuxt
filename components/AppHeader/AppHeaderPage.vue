<template>
  <header>
    <div>
      <Logo />
      <strong>{{ t(`pages.${String(route.name)}.title`) }}</strong>
    </div>
    <Nav />
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useLang();
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  justify-content: space-between;
}

header>div {
  display: flex;
  align-items: center;

  strong {
    border-left: 0.1rem solid goldenrod;
    padding-left: 1rem;
    height: 64%;
    display: flex;
    align-items: center;
  }
}
</style>