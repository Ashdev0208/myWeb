
<script setup>
</script>

<template>
  <div class="parent">
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade" mode="out-in" :duration="400">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>

  </div>
</template>


<style scoped>
.slide-fade-enter-active {
  transition: all .4s ease-out;
}


.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-leave-to {
  opacity: 0;
}
</style>