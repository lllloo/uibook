<template>
  <label
    class="base-input"
    :class="{
      'one-line': oneLine,
      'base-input--small': small,
      'base-input--large': large,
    }"
  >
    <div
      v-if="label"
      class="label"
    >{{ label }}</div>
    <div class="input-wrap">
      <slot name="start-icon" />
      <input
        v-model="value"
        :type="type"
        :placeholder="placeholder"
      >
      <slot name="icon" />
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
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
const emit = defineEmits(['update:modelValue']);
const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});
</script>

<style lang="scss" scoped>
input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
}

.base-input {
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
  justify-content: space-between;
  align-items: center;
  border-radius: var(--input-base-border-radius);
  border: 1px solid var(--gray-color);

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
