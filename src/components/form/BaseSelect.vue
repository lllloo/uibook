<template>
  <div
    class="base-select"
    :class="{
      selected: !notSelected,
    }"
    @click="open"
  >
    {{ notSelected ? placeholder : showLabel }}
    <select
      ref="select"
      v-model="value"
    >
      <option
        v-for="(item, index) in options"
        :key="index"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
    <ul>
      <li
        v-for="(item, index) in options"
        :key="index"
        :class="{
          checked: item.value === value,
        }"
        @mousedown="value = item.value"
      >
        {{ item.label }}
      </li>
    </ul>
    <i class="down fas fa-chevron-down" />
  </div>
</template>
<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});
const select = ref();
const open = () => {
  select.value.focus();
};

const emit = defineEmits(['update:modelValue', 'change']);
const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
    emit('change', val);
  },
});
const showLabel = computed(() => {
  return props.options.find((item) => item.value === value.value)?.label;
});

const notSelected = computed(() => {
  return value.value === '';
});
</script>
<style lang="scss" scoped>
.base-select {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  color: #999999;

  &.selected {
    color: #333;
  }

  &--small {
    --input-height: var(--input-small-height);
  }

  &--large {
    --input-height: var(--input-large-height);
  }

  border: 1px solid var(--gray-color);
  height: var(--select-height);
  border-radius: var(--select-base-border-radius);

  select {
    width: 0;
    opacity: 0;

    &:focus {
      ~ul {
        display: flex;
      }
    }
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul {
    display: none;
    position: absolute;
    left: 0;
    top: calc(100% + 2px);
    flex-direction: column;
    border-radius: 5px;
    background: #fff;
    width: 100%;
    z-index: 1;
    border: 1px solid #dcdcdc;
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
        background: var(--primary-color);
        color: #fff;
      }
    }
  }
  .down {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
