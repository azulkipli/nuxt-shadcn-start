<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const isDev = import.meta.dev;
useHead({
  htmlAttrs: {
    lang: "en",
    class: "no-scrollbar",
  },
  bodyAttrs: {
    class: isDev ? "debug-screens no-scrollbar" : "no-scrollbar",
  },
  titleTemplate: (param) => {
    return param ? `${param} | NuxtShadcn` : "";
  },
  // link: [],
});
useSeoMeta({
  keywords: "nuxt, shadcn, starter",
  ogTitle: "Home | NuxtJS Shadcn UI",
  ogDescription: "NuxtJS Shadcn UI",
  ogImage: "https://unocss.dev/logo.svg",
  ogUrl: "http://nuxt-shadcn-start.vercel.app",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage: "URL_ADDRESSxtseo.com/twitter-image.jpg",
  twitterTitle: "Home",
  twitterDescription: "Home page NuxtJS Shadcn UI",
});
</script>
