<script setup>
const props = defineProps({
  options: {
    /** @type import('vue').PropType<{label: string, value: string|number}[]> */
    type: Array,
    default: () => []
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
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

<template>
  <div
    class="base-select"
    :class="{
      selected: !notSelected,
      'is-disabled': disabled
    }"
    @click="open"
  >
    <input
      ref="inputRef"
      type="text"
      :value="notSelected ? null : showLabel"
      :placeholder="placeholder"
      readonly
      :disabled="disabled"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />

    <IconAngleDown class="down" />

    <BaseTooltip
      v-if="isFocus"
      full
    >
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

<style lang="scss" scoped>
input {
  border: none;
  outline: none;
  background: transparent;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.base-select {
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: 0;

  position: relative;
  width: 100%;
  cursor: pointer;

  --color: var(--base-color);
  --sub-color: var(--base-sub-color);
  color: var(--color);
  background: var(--sub-color);

  input {
    cursor: inherit;
    width: 100%;
    padding: var(--base-padding) calc(var(--base-padding) * 2);
    border-radius: inherit;
    border: var(--base-border-size) solid var(--base-border-color);

    &:focus {
      border-color: var(--color);
      ~ .down {
        transform: translateY(-50%) rotate(180deg);
      }
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  :deep(svg) {
    fill: currentColor;
  }

  .down {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: 50%;
    opacity: 0.7;
    @at-root .is-disabled#{&} {
      opacity: 0.5;
    }
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      line-height: var(--base-line-height);
      padding: var(--base-padding) 0;
      display: flex;
      align-items: center;
      color: #333;

      &.checked,
      &:hover {
        color: var(--color);
      }
    }
  }

  &.selected {
    color: var(--color);
  }
}
</style>
