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
const props = defineProps({
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['onClick']);
</script>

<style lang="scss" scoped>
button {
  // border: none;
  // outline: none;
  // background: transparent;
  // width: 100%;
}

.base-button {
  width: 100%;

  &--small {
    --input-height: var(--input-small-height);
  }

  &--large {
    --input-height: var(--input-large-height);
  }
}

</style>
