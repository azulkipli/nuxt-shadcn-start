<template>
  <div id="defLayout" class="min-h-screen container w-full mx-auto p-6">
    <Header class="mx-auto w-full justify-center border border-gray-200 rounded-2xl" />
    <main class="mx-auto text-center mt-8">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
