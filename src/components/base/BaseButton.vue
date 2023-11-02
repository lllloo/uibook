<template>
  <button
    :class="{
      'base-button': true,
      'base-button--small': small,
      'base-button--large': large,
      'base-button--outline': outline,
      'base-button--text': text,
      'base-button--circle': circle,
      'base-button--radius': radius,
      'is-disable': disable,
      [`base-button--${type}`]: type
    }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  small: {
    type: Boolean,
    default: false
  },
  large: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: null
  },
  outline: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  radius: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disable: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
button {
  border: none;
  outline: none;
  background: transparent;
}

.base-button {
  --padding: var(--base-padding);
  --color: var(--black);

  cursor: pointer;
  font-size: 1rem;
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: var(--padding) calc(var(--padding) * 2);

  &--small {
    --padding: var(--base-small-padding);
  }

  &--large {
    --padding: var(--base-large-padding);
  }

  border: 1px solid var(--color);
  background: var(--color);
  color: var(--white);

  &--primary,
  &--success,
  &--warring,
  &--danger {
    color: var(--white);
  }

  &--primary {
    --color: var(--primary);
  }

  &--success {
    --color: var(--success);
  }

  &--warring {
    --color: var(--warning);
  }

  &--danger {
    --color: var(--danger);
  }

  &--outline {
    background: transparent;
    color: var(--color);
  }

  &--radius {
    border-radius: calc(var(--padding) * 3);
  }

  &--circle {
    line-height: 1;
    border-radius: 50%;
    padding: var(--padding);
  }

  &.is-disable {
    opacity: 0.7;
    cursor: not-allowed;
  }
}
</style>
