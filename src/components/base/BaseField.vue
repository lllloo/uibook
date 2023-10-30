<template>
  <div
    class="base-field"
    :class="{
      'one-line': oneLine,
      'base-field--small': small,
      'base-field--large': small
    }"
  >
    <div v-if="label" class="label">
      {{ label }}
    </div>
    <div v-if="hasSlot" class="input-wrap">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  oneLine: {
    type: Boolean,
    default: false
  },
  small: {
    type: Boolean,
    default: false
  },
  large: {
    type: Boolean,
    default: false
  }
})

const hasSlot = !!useSlots().default
</script>

<style lang="scss" scoped>
.base-field {
  width: 100%;

  &--small {
    --input-height: var(--input-small-height);
  }

  &--large {
    --input-height: var(--input-large-height);
  }

  &.one-line {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.label {
  font-size: var(--input-font-size);
  margin-bottom: 10px;
  font-weight: bold;

  .one-line & {
    flex-shrink: 0;
    margin-bottom: 0;
    margin-right: 10px;
  }
}

.input-wrap {
  display: flex;
  align-items: center;
  border-radius: var(--input-base-border-radius);
  height: var(--input-height);

  .one-line & {
    width: 100%;
  }
}
</style>
