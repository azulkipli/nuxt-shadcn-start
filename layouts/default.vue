<template>
  <div id="defLayout" class="min-h-screen mx-auto container w-full p-6 border">
    <Header class="rounded-2xl">
      <NavHeader />
    </Header>
    <main class="mx-auto mt-4 px-4 py-4">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
