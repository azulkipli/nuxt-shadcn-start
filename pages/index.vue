<template>
  <div id="pageHome" class="">
    <h1 class="text-blue-700 text-3xl mb-5">HOME</h1>
    <div class="flex gap-3 mt-5">
      <Button
        class="border curosor-pointer hover:opacity-85 transition-all duration-500"
        :variant="varBtn"
        @click="changeVarBtn"
        >Shadcn Button</Button
      >
      <FormRegister />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Home",
  description: "Home page NuxtJS Shadcn UI",
  layout: "default",
});

useSeoMeta({
  title: "Home",
  description: "Home page NuxtJS Shadcn UI",
  ogTitle: "Home",
  ogDescription: "Home page NuxtJS Shadcn UI",
});

type BtnVarian = "outline" | "secondary" | "destructive" ;
const varBtn = ref<BtnVarian>("outline") ;

const changeVarBtn = () => {
  if (varBtn.value === "outline") varBtn.value = "secondary";
  else if (varBtn.value === "secondary") varBtn.value = "destructive";
  else if (varBtn.value === "destructive") varBtn.value = "outline";
};
</script>

<style></style>
