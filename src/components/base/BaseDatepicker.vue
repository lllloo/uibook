<script setup lang="ts">
import { cn, baseCva } from './base'
import VueDatePicker from '@vuepic/vue-datepicker'
import { type VueDatePickerProps } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

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
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  color: 'default',
  size: 'default',
  outline: true,
  placeholder: ''
})

const value = defineModel<VueDatePickerProps['modelValue']>()
</script>

<template>
  <VueDatePicker v-model="value">
    <template #trigger>
      <input
        :class="cn(variants({ color, size, outline }), $attrs.class ?? '')"
        :value="value"
        :placeholder="placeholder"
        readonly
      />
    </template>
  </VueDatePicker>
</template>

<style lang="scss" scoped></style>
