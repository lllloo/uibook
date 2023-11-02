<template>
  <div
    ref="buttonRef"
    class="base-select"
    :class="{
      'base-select': true,
      'base-select--small': small,
      'base-select--large': large,
      selected: !notSelected
    }"
    @click="open"
  >
    <input ref="inputRef" type="text" :value="notSelected ? placeholder : showLabel" readonly />
    <i class="down fas fa-chevron-down" />
    <BaseSelectTooltip ref="tooltipRef" v-model="value" :options="options" :style="floatingStyles" />
  </div>
</template>
<script setup>
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/vue'

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

const buttonRef = ref()
const tooltipRef = ref()

const { floatingStyles } = useFloating(buttonRef, tooltipRef, {
  placement: 'bottom',
  middleware: [offset(10), flip(), shift()],
  whileElementsMounted: autoUpdate
})
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
      ~ div :deep ul {
        display: flex;
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
}
</style>
