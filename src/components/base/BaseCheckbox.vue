<template>
  <component
    :is="isLabel ? 'label' : 'div'"
    class="base-checkbox"
    :class="{
      'base-checkbox--outline': outline,
      'is-disabled': disabled,
      'is-checked': isChecked
    }"
  >
    <input
      v-model="syncValue"
      :value="value"
      type="checkbox"
      :disabled="disabled"
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
  isLabel: {
    type: Boolean,
    default: true
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
  --border-size: 1px;
  --padding: calc(var(--base-padding) - var(--border-size));

  --color: var(--color-black);
  --background: var(--color-white);
  --border-color: var(--color-gray);

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: var(--base-padding);

  color: var(--color);
  background: var(--background);

  .base-checkbox__checkbox {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    margin-right: var(--padding);
    border-radius: var(--base-border-radius);
    background: var(--background);

    > svg {
      width: 80%;
      fill: var(--color-white);
      display: none;
    }

    @at-root .is-checked#{&} {
      border: 1px solid;
      background: var(--color);

      > svg {
        display: block;
      }
    }
  }

  &__label {
    display: flex;
    align-items: center;
  }

  &--outline {
    border: var(--border-size) solid var(--border-color);
  }

  &.is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &.fill {
    .base-checkbox__checkbox {
      display: none;
    }
    @at-root .is-checked#{&} {
      color: var(--color-white);
      background: var(--color);
      border-color: var(--color);
    }
  }

  &.primary {
    --color: var(--color-primary);
  }
}
</style>
