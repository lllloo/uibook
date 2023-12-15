<template>
  <div
    class="base-field"
    :class="{
      'one-line': oneLine
    }"
  >
    <div
      v-if="label"
      class="base-field__label"
    >
      {{ label }}
    </div>
    <div
      v-if="hasSlot"
      class="base-field__wrap"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  oneLine: {
    type: Boolean,
    default: false
  }
})

const hasSlot = !!useSlots().default
</script>

<style lang="scss" scoped>
.base-field {
  --line-height: var(--base-line-height);

  width: 100%;
  font-size: 1rem;
  line-height: var(--line-height);
  &.one-line {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__label {
    margin-bottom: 10px;
    font-weight: bold;

    .one-line & {
      flex-shrink: 0;
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  &__wrap {
    display: flex;
    align-items: center;

    .one-line & {
      width: 100%;
    }
  }
}
</style>
