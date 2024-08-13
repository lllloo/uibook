<script setup lang="ts">
const button = cva(['px-4 py-2 rounded-md shadow-md'], {
  variants: {
    color: {
      black: 'bg-black text-white  hover:bg-black/70',
      primary: ' bg-primary text-white hover:bg-primary/70'
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
  },
  compoundVariants: [
    {
      color: 'black',
      outline: true,
      class: 'bg-white text-black  ring-black hover:bg-black/10'
    },
    {
      color: 'primary',
      outline: true,
      class: 'bg-white text-primary  ring-primary hover:bg-primary/10'
    }
  ],
  defaultVariants: { color: 'black', outline: false, size: 'md' }
})

type ButtonVariants = VariantProps<typeof button>
export interface Props {
  color?: ButtonVariants['color']
  size?: ButtonVariants['size']
  outline?: ButtonVariants['outline']
  disabled?: ButtonVariants['disabled']
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
    button({
      color: props.color,
      size: props.size,
      outline: props.outline,
      disabled: props.disabled
    }),
    attrs.class as string
  )
})
</script>

<template>
  <button
    type="button"
    :class="className"
  >
    <slot />
  </button>
</template>
