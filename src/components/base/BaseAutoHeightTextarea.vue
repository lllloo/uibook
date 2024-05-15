<script setup lang="ts">
export interface Props {
  class?: string
  inputClass?: string
  color?: 'black' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  inputClass: '',
  color: 'black',
  size: 'md',
  readonly: false,
  disabled: false,
  placeholder: '請輸入',
  name: ''
})

const value = defineModel<string>()

const colors = {
  base: {
    black: 'text-black fill-black',
    primary: 'text-primary fill-primary'
  },
  input: {
    black: 'text-black ring-1 ring-inset ring-black/70 focus:ring-black',
    primary: 'text-primary ring-1 ring-inset ring-primary/70 focus:ring-primary'
  }
}

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

const classes = computed(() => {
  const baseClass = 'relative rounded-md shadow-md'
  const colorClass = colors.base[props.color]
  return twMerge(baseClass, colorClass, props.class)
})

// shadow-md

const preClasses = computed(() => {
  const baseClass =
    'w-full px-4 py-2 rounded-md outline-none break-words whitespace-pre-wrap font-sans'
  const sizeClass = sizes[props.size]
  return twMerge(baseClass, sizeClass, props.inputClass)
})
const inputClasses = computed(() => {
  const baseClass = 'absolute top-0 left-0 w-full h-full resize-none overflow-hidden'
  const colorClass = colors.input[props.color]
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  return twMerge(preClasses.value, baseClass, colorClass, disabledClass, props.inputClass)
})
</script>

<template>
  <div :class="classes">
    <!-- 'invisible'。 -->
    <pre :class="[preClasses]">{{ value }}<br></pre>
    <textarea
      v-model="value"
      :class="[inputClasses]"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    />
  </div>
</template>
