<template>
  <a class="logotype" href="/" title="It's Corn Logo">
    <div class="logo">🌽</div>
    <div class="typo">
      <span>{{t('components.logo.its')}}</span>
      <span>{{t('components.logo.corn')}}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
const { t } = useLang();
</script>

<style scoped lang="scss">
.logotype {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  font: bold 1rem/1 Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;

  &:active,
  &:visited {
    color: inherit;
  }

  &:before {
    position: absolute;
    content: "";
    width: 1rem;
    height: 1rem;
    background-color: lightyellow;
    border-radius: 50%;
    transform: translateX(-2rem);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      transform: translateX(-2rem) scale(8);
      opacity: 0;
    }

    .logo {
      transform: rotate(30deg);
      transition: all 0.1s ease-in-out;
    }
  }
}

.logo {
  font-size: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
  transform: rotate(45deg);
}

.typo {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  line-height: 1;
  gap: 0;
  outline: tomato;
  // background-image: linear-gradient(90deg, goldenrod, olivedrab);
  // background-clip: text;
}
</style>