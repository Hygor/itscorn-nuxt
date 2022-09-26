<template>
  <nav>
    <ul>
      <li>
        <NuxtLink :to="`/`">{{t('components.nav.firstLink')}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/about`">{{t('components.nav.secondLink')}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { t } = useLang();
</script>

<style lang="scss" scoped>
nav {
  font: normal 1rem/1 Verdana, Geneva, Tahoma, sans-serif;
}

ul {
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: stretch;
  gap: 2rem;
  margin: 0 2rem;
}

a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  color: olivedrab;
  transition: color 0.16s ease-in-out;

  &:hover {
    color: goldenrod;
  }
}
</style>