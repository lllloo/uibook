<template>
  <label
    class="base-field"
    :class="{
      'one-line': oneLine,
      'base-field--small': small,
      'base-field--large': small,
    }"
  >
    <div
      v-if="label"
      class="label"
    >{{ label }}</div>
    <div
      class="input-wrap"
    >
      <slot>1</slot>
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  oneLine: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
});

console.log(useSlots(), !!useSlots().default);
const hasSlot = !!useSlots().default;

</script>

<style lang="scss" scoped>
input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
}

.base-field {
  width: 100%;

  &.one-line {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--small {
    --input-height: var(--input-small-height);
  }

  &--large {
    --input-height: var(--input-large-height);
  }
}

.label {
  font-size: 1rem;
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
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--gray-color);
  background: #f2f0f0;
  

  .one-line & {
    width: 100%;
  }

  input {
    padding: 0 15px;
    height: var(--input-height);
    transition: box-shadow .3s;
    border: none;
    &:focus {
      box-shadow: 0 0 5px rgba(var(--primary-rgb), 1);
    }
  }
}
</style>
