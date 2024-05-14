<script setup lang="ts">
export interface Props {
  class?: string
  color?: 'black' | 'primary' | 'transparent'
  size?: 'sm' | 'md' | 'lg'
  outline?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  color: 'black',
  size: 'md',
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
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

const buttonClasses = computed(() => {
  const baseClass = 'px-4 py-2 rounded-md'
  const colorClass = props.outline ? outlineColorClasses[props.color] : colorClasses[props.color]
  const sizeClass = sizeClasses[props.size]
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  return twMerge(baseClass, colorClass, sizeClass, disabledClass, props.class)
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
