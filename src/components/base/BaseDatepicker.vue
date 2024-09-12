<script setup lang="ts">
import { baseCva } from './base'

import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const input = cva(['w-full', 'px-4 py-2 rounded-md shadow-md', ...baseCva], {
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
  },
  defaultVariants: {
    color: 'default',
    size: 'default'
  }
})

type InputVariants = VariantProps<typeof input>
export interface Props {
  color?: InputVariants['color']
  size?: InputVariants['size']
  outline?: InputVariants['outline']
}

const props = withDefaults(defineProps<Props>(), {
  outline: true
})

const attrs = useAttrs()
const className = computed(() => {
  return twMerge(
    input({
      color: props.color,
      size: props.size,
      outline: props.outline
    }),
    attrs.class as string
  )
})

const value = defineModel<any>()
</script>

<template>
  <VueDatePicker v-model="value">
    <template #trigger>
      <input
        :class="className"
        :value="value"
        readonly
      />
    </template>
  </VueDatePicker>
</template>

<style lang="scss" scoped></style>
