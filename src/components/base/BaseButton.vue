<script setup lang="ts">
export interface Props {
  color?: 'black' | 'primary' | 'transparent'
  size?: 'sm' | 'base' | 'lg'
  outline?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'black',
  size: 'base',
  outline: false,
  disabled: false
})

const colorClasses = {
  black: 'text-white bg-black hover:bg-black/70',
  primary: 'text-white bg-primary hover:bg-primary/70',
  transparent: 'text-black bg-transparent hover:bg-black/10'
}

const outlineColorClasses = {
  black: 'border border-black text-black hover:bg-black/10',
  primary: 'border border-primary text-primary hover:bg-primary/10',
  transparent: 'border border-transparent text-black hover:border-black'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded',
  base: 'px-4 py-2 text-base rounded',
  lg: 'px-4 py-2 text-lg rounded'
}

const buttonClasses = computed(() => {
  const color = props.color
  const size = props.size
  const isOutline = props.outline
  const isDisabled = props.disabled

  const colorClass = isOutline ? outlineColorClasses[color] : colorClasses[color]
  const sizeClass = sizeClasses[size]
  const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : ''
  return [colorClass, sizeClass, disabledClass]
})
</script>

<template>
  <button
    type="button"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>
