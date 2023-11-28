<template>
  <div
    class="auto-height-textarea"
    :class="{
      'is-disabled': disabled
    }"
  >
    <pre>{{ value }}<br></pre>
    <textarea v-model="value" :placeholder="placeholder" :disabled="disabled" />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
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

.auto-height-textarea {
  --padding: var(--base-padding);
  --border-color: var(--color-gray);
  --line-height: var(--base-line-height);
  --border-radius: var(--base-border-radius);

  width: 100%;
  font-size: 1rem;
  line-height: var(--line-height);
  border-radius: var(--border-radius);
  position: relative;

  pre,
  textarea {
    margin: 0;
    padding: var(--padding) calc(var(--padding) * 2);
    min-height: var(--base-line-height);
    border-radius: var(--border-radius);
    word-break: break-word;
    line-height: inherit;
    white-space: pre-wrap;
    font-size: inherit;
    font-family: inherit;
    border: none;
  }

  pre {
    visibility: hidden;
  }

  textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    resize: none;
    // 有時候太快會產生 scrollbar 會造成scrollbar出現問題
    overflow: hidden;
    box-shadow: inset 0 0 0 1px var(--border-color);
    &:focus {
      box-shadow: inset 0 0 0 1px var(--color-primary);
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
