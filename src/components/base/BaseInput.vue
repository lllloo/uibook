<script setup lang="ts">
import { cn, baseCva } from './base'

const variants = cva(['w-full', 'px-4 py-2 rounded-md shadow-md', ...baseCva], {
  variants: {
    color: {
      default: 'text-black  border-black/50 focus:border-black ring-black/70',
      primary: 'text-primary  border-primary/50 focus:border-primary ring-primary/70'
    },
    outline: {
      true: 'border py-[7px]',
      false: 'border-none'
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg'
    }
  }
})

type Variants = VariantProps<typeof variants>
export interface Props {
  color?: Variants['color']
  size?: Variants['size']
  outline?: Variants['outline']
}

withDefaults(defineProps<Props>(), {
  color: 'default',
  size: 'default',
  outline: true
})

const attrs = useAttrs()

const value = defineModel<any>()
const isPassword = computed(() => attrs.type === 'password')
</script>

<template>
  <input
    v-model="value"
    :class="cn(variants({ color, size, outline }), $attrs.class ?? '')"
    :autocomplete="isPassword ? 'off' : 'on'"
  />
</template>
