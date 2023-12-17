<template>
  <div>
    <TheHeader />
    <main class="flex flex-col min-h-screen items-center justify-center">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
</script>