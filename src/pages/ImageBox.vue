<template>
  <a
    href="javascript:;"
    class="mb-2 inline-block"
    @click="back"
  >
    Back
  </a>
  <div class="image-wrap">
    <img
      class="view-transition-image"
      :src="`https://picsum.photos/id/${$route.params.id}/600/400`"
      alt=""
    />
  </div>
</template>
<script setup>
const back = () => {
  history.go(-1)
}
onBeforeRouteLeave((to, from, next) => {
  document.startViewTransition(() => {
    next()
  })
})
</script>
<style lang="scss">
.image-wrap {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>
