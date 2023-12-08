<template>
  <div
    class="base-input"
    :class="{
      'is-disabled': disabled
    }"
  >
    <slot></slot>
    <input
      v-model="value"
      :class="inputClass"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputClass: {
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
input {
  border: none;
  outline: none;
  background: transparent;
}

.base-input {
  --padding: var(--base-padding, 0.375rem);
  --font-size: var(--base-font-size, 1rem);
  --line-height: var(--base-line-height, 1.25);
  --border-size: 1px;
  --border-radius: var(--base-border-radius, 0.25rem);

  --color: var(--color-black);
  --background: var(--color-white);
  --border-color: var(--color-gray);

  position: relative;
  width: 100%;
  font-size: var(--base-font-size);
  border-radius: var(--border-radius);

  input {
    width: 100%;
    line-height: var(--line-height);
    border-radius: inherit;
    padding: calc(var(--padding) - 1px) calc(var(--padding) * 2);
    border: var(--border-size) solid var(--border-color);
    color: var(--color);
    &:focus {
      border: 1px solid;
    }
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
