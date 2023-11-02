<template>
  <div
    :class="{
      'base-input': true,
      'base-input--small': small,
      'base-input--large': large,
      'is-disabled': disabled
    }"
  >
    <slot name="start-icon" />
    <input v-model="value" :type="type" :placeholder="placeholder" :disabled="disabled" />
    <slot name="icon" />
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
  label: {
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
  },
  disabled: {
    type: Boolean,
    default: false
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
  width: 100%;
  --padding: var(--base-padding);
  --border-color: #c8cacb;
  --color: var(--base-input-color);

  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: 0 calc(var(--padding) * 2);
  border: 1px solid var(--border-color);

  &--small {
    --padding: var(--base-small-padding);
  }

  &--large {
    --padding: var(--base-large-padding);
  }

  &.is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  input {
    border: none;
    padding: 0;
    line-height: var(--base-line-height);
    height: calc(var(--base-line-height) * 16px + var(--padding) * 2);
  }
}
</style>
