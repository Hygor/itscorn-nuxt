<template>

  <Head>
    <Title>{{ route.meta.title }}</Title>
    <Meta name="description" content={{t(pages.about.title)}} />
  </Head>

  <section id="preview">
    <iframe ref="spline" id="spline" src='https://my.spline.design/corncopy-47796271a00707778d761e3c8c2e73dd/'
      frameborder='0' width='100%' height='800'></iframe>
  </section>

</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useLang();
definePageMeta({
  layout: "content-page",
});

useHead(() => ({
  title: t('pages.about.title'),
}));
</script>

<style lang="scss">
#preview {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  padding: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 3rem;
    right: 2rem;
    width: 11rem;
    height: 3rem;
    background-color: #f0f0f0;
  }
}
</style>