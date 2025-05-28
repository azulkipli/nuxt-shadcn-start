<template>
  <div id="pageHome" class="">
    <h1 class="text-blue-700 text-3xl mb-5">HOME</h1>
    <Button
    class="border rounded-lg curosor-pointer hover:opacity-85 transition-all duration-500"
    :variant="varBtn" @click="changeVarBtn">Shadcn Button</Button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Home",
  description: "Home page NuxtJS Shadcn UI",
  layout: "default",
})

useSeoMeta({
  title: "Home",
  description: "Home page NuxtJS Shadcn UI",
  ogTitle: "Home",
  ogDescription: "Home page NuxtJS Shadcn UI",
})

const varBtn = ref("outline");

const changeVarBtn = () => {
  if(varBtn.value === "outline")
  varBtn.value = "secondary";
else if(varBtn.value === "secondary")
  varBtn.value = "destructive";
else if(varBtn.value === "destructive")
  varBtn.value = "outline";
}

</script>

<style>

</style>