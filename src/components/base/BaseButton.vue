<script setup lang="ts">
import { cn, baseCva } from './base'

const variants = cva(
  ['inline-flex items-center justify-center', 'px-4 py-2 rounded-md shadow-md', ...baseCva],
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
    ]
  }
)

type Variants = VariantProps<typeof variants>
export interface Props {
  color?: Variants['color']
  size?: Variants['size']
  outline?: Variants['outline']
  tag?: string
}

withDefaults(defineProps<Props>(), {
  color: 'default',
  size: 'default',
  outline: false,
  tag: 'button'
})
</script>

<template>
  <component
    :is="tag"
    :class="cn(variants({ color, size, outline }), $attrs.class ?? '')"
    type="button"
  >
    <slot />
  </component>
</template>
