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
  --border-size: 1px;
  --padding: calc(var(--base-padding) - var(--border-size));

  --color: var(--color-black);
  --background: var(--color-white);
  --border-color: var(--color-gray);

  position: relative;
  width: 100%;
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  color: var(--color);

  textarea {
    width: 100%;
    border-radius: inherit;
    padding: var(--padding) calc(var(--padding) * 2);
    border: var(--border-size) solid var(--border-color);
    &:focus {
      --border-color: var(--color-black);
    }
  }

  &.is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
    textarea {
      cursor: not-allowed;
    }
  }
}
</style>
