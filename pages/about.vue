<template>
  <div id="pageAbout" class="">
    <h1 class="text-red-700 text-3xl">About</h1>
    <div class="text-center my-3">
      Different layout page
    </div>
    <div class="flex gap-3 mt-5 mx-auto items-center justify-center">
      <Button
        class="border rounded-lg curosor-pointer hover:opacity-85 transition-all duration-500"
        :variant="varBtn"
        @click="changeVarBtn"
        >Shadcn Button</Button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "About",
  description: "about page NuxtJS Shadcn UI",
  layout: "centered",
})

useSeoMeta({
  title: "About",
  description: "about page NuxtJS Shadcn UI",
  ogTitle: "About",
  ogDescription: "about page NuxtJS Shadcn UI",
})

type BtnVarian = "outline" | "secondary" | "destructive" ;
const varBtn = ref<BtnVarian>("outline") ;

const changeVarBtn = () => {
  if (varBtn.value === "outline") varBtn.value = "secondary";
  else if (varBtn.value === "secondary") varBtn.value = "destructive";
  else if (varBtn.value === "destructive") varBtn.value = "outline";
};
</script>

<style>

</style>