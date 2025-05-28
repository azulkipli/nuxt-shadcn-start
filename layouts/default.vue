<template>
  <div id="defLayout" class="min-h-screen container w-full p-6">
    <header class="inline-flex gap-3">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </header>
    <main class="mx-auto mt-8">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
