<template>
  <Html :lang="locale">

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
AppSetup();
const locale = useState<string>('locale.setting')
useHead(() => {
  return {
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌽</text></svg>',
      },
    ],
  }
})
</script>

<style lang="scss">
@import url(/styles/app.css);

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  position: relative;
  background-color: #f0f0f0;
  font: 400 1rem/1.5 Verdana, sans-serif;
}
</style>