<script setup lang="ts">
import { ref } from 'vue';
const isGuest = ref(true);
const userAvatar = ref('https://i.pravatar.cc/300');
const guestAvatar = 'data:image/png;base64,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';
</script>
<template>
  <header>
    <div class="container mx-auto flex items-center">
      <div class="avatar">
        <img :src="isGuest ? guestAvatar : userAvatar" alt="avatar" />
      </div>
      <h1 class="text-gray-100 font-bold">
        {{ isGuest ? 'Guest' : 'User' }}
      </h1>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #374151;
  border-bottom: 1px solid #27303e;
  padding: 10px;
  position: fixed;
  width: 100%;
  height: 60px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
  overflow: hidden;
}
</style>