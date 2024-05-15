<script setup lang="ts">
export interface Props {
  class?: string
  radioClass?: string
  color?: 'black' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  name?: string
  value?: string
  readonly?: boolean
  disabled?: boolean
  isLabel?: boolean
  button?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  radioClass: '',
  color: 'black',
  size: 'md',
  label: '',
  name: '',
  value: '',
  readonly: false,
  disabled: false,
  isLabel: true,
  button: false
})

const syncValue = defineModel<string>()

const isChecked = computed(() => syncValue.value === props.value)

const colors = {
  base: {
    black: 'text-black',
    primary: 'text-primary'
  },
  radio: {
    black: 'border border-black',
    primary: 'border border-primary'
  },
  button: {
    black: 'bg-black text-white',
    primary: 'bg-primary text-white'
  },
  border: {
    black: 'ring-1 ring-inset ring-black',
    primary: 'ring-1 ring-inset ring-primary'
  }
}

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

const classes = computed(() => {
  const baseClass = 'inline-flex items-center px-4 py-2 rounded-md outline-none group'
  const colorClass = colors.base[props.color]
  const buttonClass = props.button ? colors.border[props.color] : ''
  const checkClass = props.button && isChecked.value ? colors.button[props.color] : ''
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  return twMerge(baseClass, colorClass, buttonClass, checkClass, disabledClass, props.class)
})

const labelClasses = computed(() => {
  const sizeClass = sizes[props.size]
  return twMerge(sizeClass)
})

const radioClasses = computed(() => {
  const baseClass = 'w-4 h-4 border border-black rounded-full mr-2'
  const colorClass = colors.radio[props.color]
  const buttonClass = props.button ? 'hidden' : ''
  const checkClass = 'group-[.is-checked]:border-4'
  return twMerge(baseClass, colorClass, buttonClass, checkClass, props.radioClass)
})
</script>

<template>
  <component
    :is="isLabel ? 'label' : 'div'"
    :class="[classes, isChecked ? 'is-checked' : '']"
  >
    <input
      v-show="false"
      v-model="syncValue"
      :value="value"
      type="radio"
      :disabled="disabled || readonly"
    />
    <div :class="radioClasses" />
    <div
      v-if="label"
      :class="labelClasses"
    >
      {{ label }}
    </div>
  </component>
</template>
