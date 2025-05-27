<template>
  <div id="defLayout" class="min-h-screen container w-full">
    <header class="inline-flex gap-3 p-6">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </header>
    <main class="mx-auto p-8">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
