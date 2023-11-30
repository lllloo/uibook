<template>
  <label
    class="base-radio"
    :class="{
      'base-radio--outline': outline,
      'is-disabled': disabled,
      'is-checked': syncValue === value
    }"
  >
    <input
      v-model="syncValue"
      :value="value"
      type="radio"
      :disabled="disabled"
    />
    <div class="base-radio__radio" />
    <div
      v-if="label"
      class="base-radio__label"
    >
      {{ label }}
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  outline: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])
const syncValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>

<style lang="scss" scoped>
input[type='radio'] {
  opacity: 0;
  outline: none;
  position: absolute;
  margin: 0;
  width: 0;
  height: 0;
  z-index: -1;
}

.base-radio {
  --color: var(--color-primary);
  --padding: var(--base-padding);
  --border-color: var(--color-gray);
  --line-height: var(--base-line-height);
  --border-radius: var(--base-border-radius);

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  line-height: var(--line-height);
  border-radius: var(--border-radius);
  padding: var(--padding);

  &--outline {
    box-shadow: inset 0 0 0 1px var(--border-color);

    &.is-checked {
      box-shadow: inset 0 0 0 1px var(--color);
      color: var(--color);
    }
  }

  input {
    &:checked {
      + .base-radio__radio {
        border: 6px solid var(--color);
      }
    }
  }

  &__radio {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background: #fff;
  }

  &__label {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  &.is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  // size
  &.small {
    --padding: var(--base-small-padding);
  }

  &.large {
    --padding: var(--base-large-padding);
  }
}
</style>
