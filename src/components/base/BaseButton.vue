<template>
  <button
    class="base-button"
    :class="{
      'base-button--outline': outline,
      'base-button--text': text,
      'base-button--circle': circle,
      'base-button--radius': radius,
      'is-disable': disable,
      [type]: !!type
    }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
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
  background: transparent;
}

.base-button {
  --color: var(--white);
  --background: var(--color-primary);
  --padding: var(--base-padding);
  --line-height: var(--base-line-height);
  --border-radius: var(--base-border-radius);

  cursor: pointer;
  font-size: 1rem;
  line-height: var(--line-height);
  border-radius: var(--border-radius);
  padding: var(--padding) calc(var(--padding) * 2 - 0.125rem);
  background: var(--background);
  color: var(--white);
  &:hover {
    --background: var(--color-primary-light);
  }

  &--outline {
    box-shadow: inset 0 0 0 1px var(--background);
    background: transparent;
    color: var(--background);
  }

  &--radius {
    border-radius: calc(var(--padding) * 3);
  }

  &--circle {
    line-height: 1;
    border-radius: 50%;
    padding: var(--padding);
  }

  &--text {
    background: transparent;
    color: var(--color-primary);
    &:hover {
      background: var(--color-primary-lightest);
    }
  }

  &.is-disable {
    opacity: 0.7;
    cursor: not-allowed;
  }

  // size
  &.small {
    padding: var(--base-small-padding) calc(var(--base-small-padding) * 2);
  }
  &.large {
    padding: var(--base-large-padding) calc(var(--base-large-padding) * 2 - 0.25rem);
  }

  // color
  &.success {
    --background: var(--color-success);
    &:hover {
      --background: var(--color-success-light);
    }
    &.base-button--text {
      color: var(--color-success);
      &:hover {
        background: var(--color-success-lightest);
      }
    }
  }
  &.warring {
    --background: var(--color-warning);
    &:hover {
      --background: var(--color-warning-light);
    }
    &.base-button--text {
      color: var(--color-warning);
      &:hover {
        background: var(--color-warning-lightest);
      }
    }
  }
  &.danger {
    --background: var(--color-danger);
    &:hover {
      --background: var(--color-danger-light);
    }
    &.base-button--text {
      color: var(--color-danger);
      &:hover {
        background: var(--color-danger-lightest);
      }
    }
  }
}
</style>
