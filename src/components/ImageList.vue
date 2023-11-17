<template>
  <ul>
    <li v-for="(item, index) in Array(12)" :key="index">
      <img
        :class="{
          'view-transition-image': index === choose
        }"
        :src="`https://picsum.photos/id/${index % 3}/400/600`"
        alt=""
        @click="goto(`/image/${index % 3}`, index)"
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
  document.startViewTransition(() => {
    router.push(path)
  })
}
</script>
<style lang="scss">
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul {
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;

  li {
    width: calc(100% / 3);

    img {
      width: 100%;
    }
  }
}
</style>
