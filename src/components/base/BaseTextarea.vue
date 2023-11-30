<template>
  <div
    class="base-textarea"
    :class="{
      'is-disabled': disabled
    }"
  >
    <textarea
      v-model="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 2
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
textarea {
  border: none;
  outline: none;
  background: transparent;
}

.base-textarea {
  --color: var(--color-primary);
  --padding: var(--base-padding);
  --border-color: var(--color-gray);
  --line-height: var(--base-line-height);
  --border-radius: var(--base-border-radius);

  width: 100%;
  font-size: 1rem;

  textarea {
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
    textarea {
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
