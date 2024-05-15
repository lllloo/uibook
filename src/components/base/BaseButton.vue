<script setup lang="ts">
export interface Props {
  class?: string
  color?: 'black' | 'primary'
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

const colors = {
  black: 'text-white bg-black hover:bg-black/70',
  primary: 'text-white bg-primary hover:bg-primary/70'
}

const outlineColors = {
  black: 'text-black ring-1 ring-inset ring-black hover:bg-black/10',
  primary: 'text-primary ring-1 ring-inset ring-primary hover:bg-primary/10'
}

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

const classes = computed(() => {
  const baseClass = 'px-4 py-2 rounded-md shadow-md'
  const colorClass = props.outline ? outlineColors[props.color] : colors[props.color]
  const sizeClass = sizes[props.size]
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  return twMerge(baseClass, colorClass, sizeClass, disabledClass, props.class)
})
</script>

<template>
  <button
    type="button"
    :class="classes"
  >
    <slot />
  </button>
</template>
