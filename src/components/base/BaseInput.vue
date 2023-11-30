<template>
  <div
    class="base-input"
    :class="{
      'is-disabled': disabled
    }"
  >
    <input
      v-model="value"
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
  --color: var(--color-primary);
  --padding: var(--base-padding);
  --border-color: var(--color-gray);
  --line-height: var(--base-line-height);
  --border-radius: var(--base-border-radius);

  width: 100%;
  font-size: 1rem;

  input {
    width: 100%;
    line-height: var(--line-height);
    border-radius: var(--border-radius);
    padding: var(--padding) calc(var(--padding) * 2);
    box-shadow: inset 0 0 0 1px var(--border-color);
    &:focus {
      box-shadow: inset 0 0 0 1px var(--color);
    }
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
