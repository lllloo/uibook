<template>
  <button
    class="base-button"
    :class="{
      'base-button--small': small,
      'base-button--large': large,
    }"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['onClick']);
</script>

<style lang="scss" scoped>
button {
  border: none;
  outline: none;
  background: transparent;
}

.base-button {
  --base-padding-button: var(--base-padding);
  background: var(--primary-color);
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
  padding: var(--base-padding-button) calc(var(--base-padding-button) * 2);
  border-radius: 0.25rem;

  &--small {
    --base-padding-button: var(--base-small-padding);
  }

  &--large {
    --base-padding-button: var(--base-large-padding);
  }
}
</style>
