<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
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

<template>
  <div class="auto-height-textarea">
    <pre>{{ value }}<br></pre>
    <textarea
      v-model="value"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    />
  </div>
</template>

<style lang="scss" scoped>
textarea {
  border: none;
  outline: none;
  background: transparent;
}

.auto-height-textarea {
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: 0;

  position: relative;
  width: 100%;

  --color: var(--base-color);
  --sub-color: var(--base-sub-color);
  color: var(--color);
  background: var(--sub-color);

  pre,
  textarea {
    padding: var(--base-padding) calc(var(--base-padding) * 2);
    border-radius: inherit;
    border: var(--base-border-size) solid transparent;
    word-break: break-word;
    line-height: inherit;
    white-space: pre-wrap;
    font-size: inherit;
    font-family: inherit;
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
    border-color: var(--base-border-color);

    &:focus {
      border-color: var(--color);
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}
</style>
