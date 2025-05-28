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
  keywords: ["nuxt", "shadcn", "starter"],
  ogTitle: "Home | NuxtJS Shadcn UI",
  ogDescription: "NuxtJS Shadcn UI",
  ogImage: "https://unocss.dev/logo.svg",
  ogUrl: "http://nuxt-shadcn-start.vercel.app",
  ogType: "website",
  ogDescription: "Home page NuxtJS Shadcn UI",
  ogImage: "URL_ADDRESSxtseo.com/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterImage: "URL_ADDRESSxtseo.com/twitter-image.jpg",
  twitterTitle: "Home",
  twitterDescription: "Home page NuxtJS Shadcn UI",
});
</script>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
