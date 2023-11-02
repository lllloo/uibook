<template>
  <div class="base-tooltip" :style="floatingStyles">
    <ul>
      <li
        v-for="(item, index) in options"
        :key="index"
        :class="{
          checked: item.value === value
        }"
        @mousedown="value = item.value"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
<script setup>

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>
<style lang="scss" scoped>
.base-tooltip {
  --padding: var(--base-padding);
  --border-color: #c8cacb;
  --color: var(--primary);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul {
    display: none;
    flex-direction: column;
    border-radius: 5px;
    background: #fff;
    width: 100%;
    z-index: 1;
    // border: 1px solid #dcdcdc;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.16);
    overflow: hidden;

    li {
      height: 40px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      color: #333;

      &.checked,
      &:hover {
        color: var(--color);
      }
    }
  }
}
</style>
