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

    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="14"
      viewBox="0 0 448 512"
      class="down"
    >
      <!-- !Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc. -->
      <path
        d="M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z"
      />
    </svg>

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
  --color: var(--color-primary);
  --padding: var(--base-padding);
  --border-color: var(--color-gray);
  --line-height: var(--base-line-height);
  --border-radius: var(--base-border-radius);

  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  position: relative;

  input {
    width: 100%;
    line-height: var(--line-height);
    border-radius: var(--border-radius);
    padding: var(--padding) calc(var(--padding) * 2);
    box-shadow: inset 0 0 0 1px var(--border-color);
    &:focus {
      box-shadow: inset 0 0 0 1px var(--color);
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

  &.small {
    --padding: var(--base-small-padding);
  }

  &.large {
    --padding: var(--base-large-padding);
  }
}
</style>
