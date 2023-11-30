<script setup></script>

<template>
  <AppHeader />
  <main>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </main>
</template>
