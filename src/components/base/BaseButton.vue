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
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    class="base base-button"
    :class="{
      'base-button--circle': circle,
      'base-button--radius': radius,
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
  --border-radius: var(--base-border-radius, 0.25rem);
  --padding: var(--base-padding, 0.375rem);
  --font-size: var(--base-font-size, 1rem);
  --line-height: var(--base-line-height, 1.25);

  --color: var(--color-black);
  --background: var(--color-white);
  --border-color: var(--color-black);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: var(--font-size);
  line-height: var(--line-height);
  border-radius: var(--border-radius);
  padding: var(--padding) calc(var(--padding) * 2 - 0.125rem);

  color: var(--color);
  background: var(--background);
  box-shadow: inset 0 0 0 1px var(--border-color);
  &:hover {
    --color: var(--color-white);
    --background: var(--color-black);
  }

  &--radius {
    border-radius: calc(var(--padding) * 3);
  }

  &--circle {
    line-height: 1;
    width: calc(var(--font-size) + var(--padding) * 2);
    border-radius: 50%;
    padding: var(--padding);
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
