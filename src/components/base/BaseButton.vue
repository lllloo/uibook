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
  --border-size: 1px;
  --padding: calc(var(--base-padding) - var(--border-size));

  --color: var(--color-black);
  --background: var(--color-white);
  --border-color: var(--border-color);

  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: var(--padding) calc(var(--padding) * 2);

  color: var(--color);
  background: var(--background);
  border: var(--border-size) solid var(--border-color,);

  &:hover {
    --color: var(--color-white);
    --background: var(--color-black);
    --border-color: var(--background);
  }

  &--circle {
    width: calc(var(--base-font-size) * var(--base-line-height) + var(--padding) * 2 + var(--border-size) * 2);
    border-radius: 50%;
    padding: var(--padding);
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

  // color
  &.primary {
    --color: var(--color-primary);
    --background: var(--white);

    &:hover {
      --color: var(--white);
      --background: var(--color-primary);
    }

    &.fill {
      --color: var(--white);
      --background: var(--color-primary);

      &:hover {
        --background: var(--color-primary-dark);
      }
    }
  }
}
</style>
