<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    /** @type import('vue').PropType<boolean|Array<string|number>> */
    type: [Array, Boolean],
    default: false
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

const isChecked = computed(() => {
  if (typeof syncValue.value === 'boolean') {
    return syncValue.value
  } else {
    return syncValue.value.includes(props.value)
  }
})
</script>

<template>
  <component
    :is="isLabel ? 'label' : 'div'"
    class="base-checkbox"
    :class="{
      'base-checkbox--outline': outline,
      'is-button': isButton,
      'is-disabled': disabled,
      'is-checked': isChecked
    }"
  >
    <input
      v-model="syncValue"
      :value="value"
      type="checkbox"
      :disabled="disabled || readonly"
    />
    <div class="base-checkbox__checkbox">
      <IconCheck />
    </div>
    <div
      v-if="label"
      class="base-checkbox__label"
    >
      {{ label }}
    </div>
  </component>
</template>

<style lang="scss" scoped>
input[type='checkbox'] {
  display: none;
  opacity: 0;
  outline: none;
  position: absolute;
  margin: 0;
  width: 0;
  height: 0;
  z-index: -1;
}

.base-checkbox {
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
  .base-checkbox__checkbox {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid var(--base-border-color);
    border-radius: 4px;
    margin-right: var(--base-padding);

    @at-root .is-checked#{&} {
      color: var(--sub-color);
      background: var(--color);
      border-color: var(--color);
    }
  }

  :deep(svg) {
    width: 80%;
    display: none;
    fill: currentColor;
    @at-root .is-checked#{&} {
      display: block;
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
    .base-checkbox__checkbox {
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
