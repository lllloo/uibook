<template>
  <label
    :class="{
      'base-checkout': true,
      'base-checkout--small': small,
      'base-checkout--large': large,
      'base-checkout--outline': outline,
      'is-checked': type === 'boolean' ? syncValue : syncValue.includes(value)
    }"
  >
    <input v-model="syncValue" :value="value" type="checkbox" />
    <div class="base-checkout__checkout">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
        <path
          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
        />
      </svg>
    </div>
    <div class="base-checkout__label">
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
    type: [Array, Boolean],
    default: false
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
  }
})
const emit = defineEmits(['update:modelValue'])
const syncValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

var type = ref(typeof props.modelValue)
</script>

<style lang="scss" scoped>
.base-checkout {
  --padding: var(--base-padding);
  --border-color: #c8cacb;
  --color: var(--base-checkbox-color);

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

  input[type='checkbox'] {
    display: none;
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;

    &:checked {
      + .base-checkout__checkout {
        border: 1px solid var(--color);
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
    margin-right: 5px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    border-radius: var(--base-border-radius);
    background: #fff;

    > svg {
      width: 80%;
      fill: #fff;
      display: none;
    }
  }

  &__label {
    display: flex;
    align-items: center;
  }
}
</style>
