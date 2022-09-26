import { IntlifyModuleOptions } from "@intlify/nuxt3";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
  }
}

export default defineNuxtConfig({
  ssr: true,
  modules: ["@intlify/nuxt3"],
  buildModules: ["@nuxtjs/tailwindcss"],
  typescript: {
    shim: false,
  },
  meta: {
    title: `It's Corn`,
  },
  head: {
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>",
      },
    ],
  },
});
