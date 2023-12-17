<template>
  <label
    class="base-checkout"
    :class="{
      'base-checkout--outline': outline,
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
    <div class="base-checkout__checkout">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
        <path
          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
        />
      </svg>
    </div>
    <div
      v-if="label"
      class="base-checkout__label"
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

.base-checkout {
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

  input {
    &:checked {
      + .base-checkout__checkout {
        border: 1px solid;
        background: var(--color);

        > svg {
          display: block;
        }
      }
    }
  }

  &__checkout {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    border-radius: var(--base-border-radius);
    background: var(--background);

    > svg {
      width: 80%;
      fill: var(--color-white);
      display: none;
    }
  }

  &__label {
    display: flex;
    align-items: center;
    margin-left: var(--padding)
  }

  &--outline {
    border: var(--border-size) solid;
  }

  &.is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &.primary {
    --color: var(--color-primary);
  }
}
</style>
