<template>
  <component
    :is="isLabel ? 'label' : 'div'"
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
  </component>
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
  padding: var(--padding) calc(var(--padding) * 2);

  color: var(--color);
  background: var(--background);

  .base-radio__radio {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    background: var(--background);
    margin-right: var(--padding);

    @at-root .is-checked#{&} {
      border: 5px solid var(--color);
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
    .base-radio__radio {
      display: none;
    }
    @at-root .is-checked#{&} {
      color: #fff;
      background: var(--color);
      border-color: var(--color);
    }
  }

  &.primary {
    --color: var(--color-primary);
  }
}
</style>
