<template>
  <div
    class="base-select"
    :class="{
      'base-select': true,
      'base-select--small': small,
      'base-select--large': large,
      selected: !notSelected
    }"
    @click="open"
  >
    <input
      ref="inputRef"
      type="text"
      :value="notSelected ? placeholder : showLabel"
      readonly
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
    <i class="down fas fa-chevron-down" />

    <BaseTooltip v-if="isFocus" full>
      <ul>
        <li
          v-for="(item, index) in options"
          :key="index"
          :class="{
            checked: value === item.value
          }"
          @mousedown="value = item.value"
        >
          {{ item.label }}
        </li>
      </ul>
    </BaseTooltip>
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
  },
  placeholder: {
    type: String,
    default: ''
  },
  small: {
    type: Boolean,
    default: false
  },
  large: {
    type: Boolean,
    default: false
  }
})
const inputRef = ref()
const open = () => {
  inputRef.value.focus()
}

const emit = defineEmits(['update:modelValue', 'change'])
const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
    emit('change', val)
  }
})

const showLabel = computed(() => {
  return props.options.find((item) => item.value === value.value)?.label
})

const notSelected = computed(() => {
  return value.value === ''
})

const isFocus = ref(false)
</script>
<style lang="scss" scoped>
input {
  border: none;
  outline: none;
  background: transparent;
}

.base-select {
  --padding: var(--base-padding);
  --border-color: #c8cacb;
  --color: var(--primary);

  cursor: pointer;
  font-size: 1rem;
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: 0 var(--padding);

  position: relative;
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid var(--border-color);

  &.selected {
    color: #333;
  }

  &--small {
    --padding: var(--base-small-padding);
  }

  &--large {
    --padding: var(--base-large-padding);
  }

  input {
    padding: 0;
    width: 100%;
    height: calc(var(--base-line-height) * 16px + var(--padding) * 2);

    &:focus {
      ~ .down {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  .down {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: 50%;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      height: 40px;
      padding: 0;
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
