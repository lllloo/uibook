<template>
  <div class="image-wrap">
    <img
      class="view-transition-image"
      :src="`https://picsum.photos/id/${$route.params.id}/400/600`"
      alt=""
    />
  </div>
</template>
<script setup>
import { onBeforeRouteLeave } from 'vue-router';


onBeforeRouteLeave((to, from, next) => {
  document.startViewTransition(() => {
    next();
  })
})

</script>
<style lang="scss">
.image-wrap {
  width: 1024px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}

</style>
