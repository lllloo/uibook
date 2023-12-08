<script setup>
defineProps({
  radius: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    class="base-button"
    :class="{
      'base-button--circle': circle,
      'base-button--radius': radius,
      'base-button--text': text,
      'is-disabled': disabled
    }"
    :disabled="disabled"
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
  --padding: var(--base-padding, 0.375rem);
  --font-size: var(--base-font-size, 1rem);
  --line-height: var(--base-line-height, 1.25);
  --border-size: 1px;
  --border-radius: var(--base-border-radius, 0.25rem);

  --color: var(--color-black);
  --background: var(--color-white);
  --border-color: var(--border-color);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: var(--font-size);
  line-height: var(--line-height);
  border-radius: var(--border-radius);
  padding: calc(var(--padding) - 1px) calc(var(--padding) * 2);

  color: var(--color);
  background: var(--background);
  border: var(--border-size) solid var(--border-color,);

  &:hover {
    --color: var(--color-white);
    --background: var(--color-black);
    --border-color: var(--background);
  }

  &--radius {
    border-radius: calc(var(--padding) * 3);
  }

  &--circle {
    line-height: 1;
    width: calc(var(--font-size) + var(--padding) * 2);
    border-radius: 50%;
    padding: calc(var(--padding) - var(--border-size));
  }

  &--text {
    --border-color: transparent;
  }

  &.is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &.fill {
    --color: var(--color-white);
    --background: var(--color-black);
    --border-color: var(--background);
    &:hover {
      --background: var(--color-black-light);
    }
  }
}
</style>
