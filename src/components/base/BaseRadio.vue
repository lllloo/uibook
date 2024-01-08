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
  },
  readonly: {
    type: Boolean,
    default: false
  },
  isLabel: {
    type: Boolean,
    default: true
  },
  isButton: {
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

<template>
  <component
    :is="isLabel ? 'label' : 'div'"
    class="base-radio"
    :class="{
      'base-radio--outline': outline,
      'is-button': isButton,
      'is-disabled': disabled,
      'is-checked': syncValue === value
    }"
  >
    <input
      v-model="syncValue"
      :value="value"
      type="radio"
      :disabled="disabled || readonly"
    />
    <div class="base-radio__radio" />
    <div
      v-if="label"
      class="base-radio__label"
    >
      {{ label }}
    </div>
  </component>
</template>

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
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: var(--base-padding);

  cursor: pointer;
  display: inline-flex;
  align-items: center;

  --color: var(--base-color);
  --sub-color: var(--base-sub-color);
  color: var(--color);
  background: var(--sub-color);

  &:hover {
    --base-border-color: var(--color);
  }
  .base-radio__radio {
    width: 16px;
    height: 16px;
    border: 1px solid var(--base-border-color);
    border-radius: 50%;
    margin-right: var(--base-padding);

    @at-root .is-checked#{&} {
      border: 5px solid var(--color);
    }
  }

  &__label {
    display: flex;
    align-items: center;
  }

  &--outline {
    color: var(--color);
    border: var(--base-border-size) solid;
  }

  &.is-button {
    color: var(--color);
    border: var(--base-border-size) solid;
    .base-radio__radio {
      display: none;
    }
    &.is-checked,
    &:hover {
      color: var(--sub-color);
      background: var(--color);
    }
  }

  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
