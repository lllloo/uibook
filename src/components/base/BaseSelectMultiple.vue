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
            checked: value.includes(item.value)
          }"
          @mousedown="clickItem(item)"
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
    /** @type import('vue').PropType<{label: string, value: string|number}[]> */
    type: Array,
    default: () => []
  },
  modelValue: {
    type: Array,
    default: () => []
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
  return props.options.filter((item) => value.value.includes(item.value)).map((item) => item.label)
})

const notSelected = computed(() => {
  return value.value.length === 0 ? '' : false
})

const clickItem = (item) => {
  const index = value.value.indexOf(item.value)
  if (index >= 0) {
    value.value.splice(index, 1)
    return
  }
  value.value = [...value.value, item.value]
}

const isFocus = ref(false)
</script>
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
  --border-size: 1px;
  --padding: calc(var(--base-padding) - var(--border-size));

  --color: var(--color-black);
  --background: var(--color-white);
  --border-color: var(--color-gray);

  cursor: pointer;
  position: relative;
  width: 100%;
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  color: var(--color);

  input {
    width: 100%;
    border-radius: inherit;
    padding: var(--padding) calc(var(--padding) * 2);
    border: var(--border-size) solid var(--border-color);
    &:focus {
      --border-color: var(--color-black);
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
    fill: var(--border-color);
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      line-height: var(--line-height);
      padding: var(--padding) 0;
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

  &.is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
    input {
      cursor: not-allowed;
    }
  }
}
</style>
