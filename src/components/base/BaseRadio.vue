<template>
  <label
    :class="{
      'base-radio': true,
      'base-radio--small': small,
      'base-radio--large': large,
      'base-radio--outline': outline,
      'is-disabled': disabled,
      'is-checked': syncValue === value
    }"
  >
    <input v-model="syncValue" :value="value" type="radio" :disabled="disabled" />
    <div class="base-radio__radio" />
    <div class="base-radio__label">
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
  small: {
    type: Boolean,
    default: false
  },
  large: {
    type: Boolean,
    default: false
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
.base-radio {
  --padding: var(--base-padding);
  --border-color: #c8cacb;
  --color: var(--base-radio-color);

  display: inline-flex;
  cursor: pointer;
  font-size: 1rem;
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: var(--padding) var(--padding);

  &--small {
    --padding: var(--base-small-padding);
  }

  &--large {
    --padding: var(--base-large-padding);
  }

  &--outline {
    border: 1px solid var(--border-color);

    &.is-checked {
      border: 1px solid var(--color);
      color: var(--color);
    }
  }

  &.is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  input[type='radio'] {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;

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
    margin-right: 5px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #c8cacb;
    background: #fff;
  }

  &__label {
    display: flex;
    align-items: center;
  }
}
</style>
