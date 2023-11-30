<template>
  <ul>
    <li v-for="(item, index) in Array(3)" :key="index">
      <img
        :class="{
          'view-transition-image': index === choose
        }"
        :src="`https://picsum.photos/id/${index}/600/400`"
        alt=""
        @click="goto(`/image/${index}`, index)"
      />
    </li>
  </ul>
</template>
<script setup>
const router = useRouter()
const choose = ref(0)
const goto = async (path, index) => {
  choose.value = index
  await nextTick()
  router.push(path)
}

onBeforeRouteLeave((to, from, next) => {
  document.startViewTransition(() => {
    next()
  })
})
</script>
<style lang="scss">
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  li {
    width: calc(100% / 3);
    padding: 10px;
    img {
      width: 100%;
    }
  }
}
</style>
