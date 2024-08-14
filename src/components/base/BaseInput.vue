<script setup lang="ts">
const input = cva(['w-full px-4 py-2 outline-none rounded-md shadow-md'], {
  variants: {
    color: {
      black: 'text-black  ring-black/70 focus:ring-black',
      primary: 'text-primary  ring-primary/70 focus:ring-primary'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    },
    outline: {
      true: 'ring-1 ring-inset'
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed'
    }
  }
})

type InputVariants = VariantProps<typeof input>
export interface Props {
  color?: InputVariants['color']
  size?: InputVariants['size']
  outline?: InputVariants['outline']
  disabled?: InputVariants['disabled']
}

const props = withDefaults(defineProps<Props>(), {
  color: 'black',
  size: 'md',
  outline: false,
  disabled: false
})

const attrs = useAttrs()
const className = computed(() => {
  return twMerge(
    input({
      color: props.color,
      size: props.size,
      outline: props.outline,
      disabled: props.disabled
    }),
    attrs.class as string
  )
})

// const props = withDefaults(defineProps<Props>(), {
//   color: 'black',
//   size: 'md',
//   disabled: false,
//   placeholder: '請輸入',
//   type: 'text',
//   name: ''
// })

const value = defineModel<string>()
const isPassword = computed(() => attrs.type === 'password')
</script>

<template>
  <input
    v-model="value"
    :class="className"
    :autocomplete="isPassword ? 'off' : 'on'"
  />
</template>
