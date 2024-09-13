<script setup lang="ts">
import { cn, baseCva } from './base'

const variants = cva(['h-4 w-4 shadow-md', 'appearance-none', ...baseCva], {
  variants: {
    color: {
      default: 'border border-black/50 checked:bg-black text-black',
      primary: 'border border-primary/50 checked:bg-primary text-primary'
    },
    size: {
      default: '',
      sm: 'h-3.5 w-3.5',
      lg: 'h-5 w-5'
    }
  }
})

type Variants = VariantProps<typeof variants>
export interface Props {
  color?: Variants['color']
  size?: Variants['size']
}

withDefaults(defineProps<Props>(), {
  color: 'default',
  size: 'default'
})

const value = defineModel<string | number>()
</script>

<template>
  <input
    v-model="value"
    :class="cn(variants({ color, size }), $attrs.class ?? '')"
    type="radio"
  />
</template>
