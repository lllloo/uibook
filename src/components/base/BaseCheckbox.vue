<script setup lang="ts">
import { baseCva } from './base'
const checkbox = cva(['h-4 w-4 rounded shadow-md', 'appearance-none', ...baseCva], {
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
  },
  defaultVariants: {
    color: 'default',
    size: 'default'
  }
})

type CheckboxVariants = VariantProps<typeof checkbox>
export interface Props {
  color?: CheckboxVariants['color']
  size?: CheckboxVariants['size']
}

const props = withDefaults(defineProps<Props>(), {})

const attrs = useAttrs()
const className = computed(() => {
  return twMerge(
    checkbox({
      color: props.color,
      size: props.size
    }),
    attrs.class as string
  )
})

const value = defineModel<string | number | string[]>()
</script>

<template>
  <input
    v-model="value"
    :class="className"
    type="checkbox"
  />
</template>
