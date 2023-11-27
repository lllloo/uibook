<template>
  <div
    :class="{
      'auto-height-textarea': true,
      'auto-height-textarea--small': small,
      'auto-height-textarea--large': large,
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
textarea {
  border: none;
  outline: none;
  background: transparent;
}

.auto-height-textarea {
  width: 100%;
  --padding: var(--base-padding);
  --border-color: #c8cacb;
  --color: var(--base-input-color);

  margin: 0;
  font-size: 1rem;
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: 0;
  border: 0;
  position: relative;

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

  pre,
  textarea {
    margin: 0;
    padding: var(--padding) calc(var(--padding) * 2);
    min-height: var(--base-line-height);
    word-break: break-word;
    line-height: inherit;
    white-space: pre-wrap;
    font-size: inherit;
    font-family: inherit;
    border: 2px solid transparent;
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
    border: 2px solid var(--border-color);
    border-radius: 4px;
    &::placeholder {
        color: #818387;
    }
    &:focus{
      box-shadow: none;
      outline: none;
      border-color: var(--primary);
    }
  }

}
</style>
