<script setup>
import BottomNav from './components/BottomNav.vue';
</script>

<template>
  <div class="app-wrapper">
    <router-view />
    <BottomNav/>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  
}
</style>
