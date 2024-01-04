<script setup>
defineProps({
  text: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    class="base-button"
    :class="{
      'base-button--text': text,
      'base-button--outline': outline
    }"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  background: transparent;
}

.base-button {
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: var(--base-padding) calc(var(--base-padding) * 2);

  --color: var(--base-color);
  --hover-color: var(--base-hover-color);
  --sub-color: var(--base-sub-color);

  color: var(--sub-color);
  background: var(--color);
  border: var(--base-border-size) solid;

  &:hover {
    background: var(--hover-color);
  }

  &--text,
  &--outline {
    color: var(--color);
    background: transparent;
    &:hover {
      color: var(--sub-color);
      background: var(--color);
    }
  }
  &--text {
    border-color: transparent;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
