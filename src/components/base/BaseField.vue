<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  oneLine: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  isLabel: {
    type: Boolean,
    default: true
  }
})

const hasSlot = !!useSlots().default
</script>

<template>
  <component
    :is="isLabel ? 'label' : 'div'"
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
      <div
        v-if="error"
        class="error-message"
      >
        {{ error }}
      </div>
    </div>
  </component>
</template>

<style lang="scss" scoped>
.base-field {
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  width: 100%;

  & + & {
    margin-top: 20px;
  }

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
    position: relative;
    display: flex;
    align-items: center;

    .one-line & {
      width: 100%;
    }
  }

  .error-message {
    position: absolute;
    top: 100%;
    left: 0;
    color: red;
    font-size: 0.8rem;
    transform: translateY(-2px);
    opacity: 0.7;
    line-height: 21px;
  }
}
</style>
