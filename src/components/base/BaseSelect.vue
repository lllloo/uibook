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
    <input
      ref="inputRef"
      type="text"
      :value="notSelected ? placeholder : showLabel"
      readonly
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
    <i class="down fas fa-chevron-down" />

    <div v-if="isFocus" ref="tooltipRef" class="base-tooltip" :style="floatingStyles">
      <div
        ref="arrowRef"
        class="base-tooltip__arrow"
        :class="{
          [placement]: true
        }"
        :style="{
          left: `${middlewareData.arrow?.x}px`
        }"
      />
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
  </div>
</template>
<script setup>
import { useFloating, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/vue'

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

const isFocus = ref(true)

const buttonRef = ref()
const tooltipRef = ref()
const arrowRef = ref()
const { floatingStyles, middlewareData, placement } = useFloating(buttonRef, tooltipRef, {
  placement: 'bottom',
  middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
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

  .base-tooltip {
    --padding: var(--base-padding);
    --border-color: #c8cacb;
    --color: var(--primary);

    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    &__arrow {
      position: absolute;
      width: 10px;
      height: 10px;
      z-index: 1;
      background: #fff;
      border: 1px solid var(--border-color);
      &.top {
        bottom: 0;
        transform: rotate(45deg) translateY(6px);
        border-top-color: transparent;
        border-left-color: transparent;
      }
      &.bottom {
        top: 0;
        transform: rotate(45deg) translateY(-6px);
        border-bottom-color: transparent;
        border-right-color: transparent;
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
    // display: none;
    flex-direction: column;
    border-radius: 5px;
    background: #fff;
    width: 100%;
    z-index: 1;
    border: 1px solid var(--border-color);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
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
