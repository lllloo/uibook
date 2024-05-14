<script setup lang="ts">
export interface Props {
  class?: string
  labelClass?: string
  wrapClass?: string
  color?: 'black' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  oneLine?: boolean
  error?: string
  isLabel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  labelClass: '',
  color: 'black',
  size: 'md',
  label: '',
  oneLine: false,
  error: '',
  isLabel: true
})

const colorClasses = {
  black: 'text-black',
  primary: 'text-primary'
}

const sizeClasses = {
  label: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  },
  error: {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }
}

const classes = computed(() => {
  const baseClass = props.oneLine ? 'flex items-center' : 'flex flex-col'
  return twMerge(baseClass, props.class)
})

const labelClasses = computed(() => {
  const baseClass = props.oneLine ? 'font-bold mr-2 shrink-0' : 'font-bold mb-2'
  const colorClass = colorClasses[props.color]
  const sizeClass = sizeClasses.label[props.size]
  return twMerge(baseClass, colorClass, sizeClass, props.labelClass)
})

const wrapClasses = computed(() => {
  const baseClass = 'relative w-full'
  return twMerge(baseClass)
})

const errorClasses = computed(() => {
  const baseClass = 'text-error absolute left-0 top-full opacity-70'
  const sizeClass = sizeClasses.error[props.size]
  return twMerge(baseClass, sizeClass)
})
</script>

<template>
  <component
    :is="isLabel ? 'label' : 'div'"
    :class="classes"
  >
    <div
      v-if="label"
      :class="labelClasses"
    >
      {{ label }}
    </div>
    <div
      v-if="!!$slots.default"
      :class="wrapClasses"
    >
      <slot />
      <div
        v-if="error"
        :class="errorClasses"
      >
        {{ error }}
      </div>
    </div>
  </component>
</template>
