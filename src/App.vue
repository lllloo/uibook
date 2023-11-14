<script setup></script>

<template>
  <header>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/image-list">Go to About</router-link>
    </p>
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <keep-alive :include="keepAliveList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style scoped>
.view-transition-image {
  contain: layout;
  view-transition-name: image;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: .5s;
}
</style>
