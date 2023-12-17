<template>
  <div
    class="auto-height-textarea"
    :class="{
      'is-disabled': disabled
    }"
  >
    <pre>{{ value }}<br></pre>
    <textarea
      v-model="value"
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
  

  pre,
  textarea {
    margin: 0;
    border-radius: inherit;
    padding: var(--padding) calc(var(--padding) * 2);
    word-break: break-word;
    line-height: inherit;
    white-space: pre-wrap;
    font-size: inherit;
    font-family: inherit;
  }
  
  pre {
    border: none;
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
