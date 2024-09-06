<script setup lang="ts">
import { baseCva } from './base'
const button = cva(
  ['inline-flex items-center justify-center ', 'px-4 py-2 rounded-md shadow-md', ...baseCva],
  {
    variants: {
      color: {
        default: 'bg-black text-white  hover:bg-black/70',
        primary: ' bg-primary text-white hover:bg-primary/70'
      },
      size: {
        default: 'text-base',
        sm: 'text-sm',
        lg: 'text-lg'
      },
      outline: {
        true: 'border border-black py-[7px]'
      }
    },
    compoundVariants: [
      {
        color: 'default',
        outline: true,
        class: 'bg-white text-black hover:bg-black/10'
      },
      {
        color: 'primary',
        outline: true,
        class: 'bg-white text-primary hover:bg-primary/10'
      }
    ],
    defaultVariants: {
      color: 'default',
      size: 'default'
    }
  }
)

type ButtonVariants = VariantProps<typeof button>
export interface Props {
  color?: ButtonVariants['color']
  size?: ButtonVariants['size']
  outline?: boolean
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'button'
})

const attrs = useAttrs()
const className = computed(() => {
  return twMerge(
    button({
      color: props.color,
      size: props.size,
      outline: props.outline
    }),
    attrs.class as string
  )
})
</script>

<template>
  <component
    :is="tag"
    :class="className"
    type="button"
  >
    <slot />
  </component>
</template>
