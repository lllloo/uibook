<template>
  <button class="base-button" :class="{
    'base-button--small': small,
    'base-button--large': large,
    'base-button--outline': outline,
    'base-button--text': text,
    [`base-button--${type}`]: type,
  }">
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
  --base-button-padding: var(--base-padding);
  --color: var(--black);

  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  padding: var(--base-button-padding) calc(var(--base-button-padding) * 2);

  &--small {
    --base-button-padding: var(--base-small-padding);
  }

  &--large {
    --base-button-padding: var(--base-large-padding);
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
}
</style>
