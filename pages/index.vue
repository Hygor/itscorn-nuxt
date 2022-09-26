<template>
  <div class="container">
    <section>
      <Banner />
      <div>
        <h1>{{ t('pages.index.title') }}</h1>
        <p>
          {{ t('pages.index.lyrics.firstLine') }}<br />
          {{ t('pages.index.lyrics.secondLine') }}<br />
          <strong>{{ t('pages.index.lyrics.highPoint') }}</strong> {{ t('pages.index.lyrics.thirdLine') }}
        </p>
        <NuxtLink to="/about" :title={callToAction}>{{ t('pages.index.lyrics.callToAction') }}</NuxtLink>
      </div>
    </section>
    <section>
      <h2>Types of corn</h2>
      <CornSlider />
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useLang();
let callToAction = t('pages.index.lyrics.callToAction');
onMounted(() => {
  callToAction = t('pages.index.lyrics.callToAction');
});
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  h1 {
    font-size: 4em;
    line-height: 1.16;
    font-weight: bold;
    margin: .5em 0;
  }

  h2 {
    font-size: 2em;
    line-height: 1.16;
    font-weight: bold;
    margin: .5em 0;
  }
}

section:first-child {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 2rem;
  line-height: 2;

  &>div {
    width: 64rem;
  }

  a {
    display: inline-block;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: olivedrab;
    border: 0.1rem solid transparent;
    padding: .80rem 2rem;
    border-radius: 1.24rem;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: lowercase;
    margin-top: 2rem;
    box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.1rem rgba(255, 255, 255, 0.4) inset;
    transition: all 0.16s ease-in-out;

    &:hover {
      cursor: pointer;
      filter: brightness(110%);
    }

    &:active {
      filter: brightness(100%);
      box-shadow: none;
    }
  }
}

@media screen and (max-width: 768px) {
  section:first-child {
    flex-direction: column-reverse;
    align-items: flex-start;

    &>div {
      width: 100%;
    }
  }
}
</style>