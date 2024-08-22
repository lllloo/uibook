<script setup lang="ts">
import { useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const fieldCva = cva(['w-full', 'transition-colors'], {
  variants: {
    color: {
      default: 'text-black',
      primary: 'text-primary'
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

type FieldVariants = VariantProps<typeof fieldCva>
export interface Props {
  color?: FieldVariants['color']
  size?: FieldVariants['size']
  tag?: string
  label?: string
  name?: string
  modelValue?: any
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  name: ''
})

const attrs = useAttrs()
const className = computed(() => {
  return twMerge(
    fieldCva({
      color: props.color,
      size: props.size
    }),
    attrs.class as string
  )
})

const field = reactive(useField<Props['modelValue']>(() => props.name, undefined))
</script>

<template>
  <component
    :is="tag"
    :class="className"
  >
    <label
      v-if="props.label"
      :for="props.name"
      class="mb-1 inline-block text-base font-bold"
    >
      {{ props.label }}
    </label>
    <slot :field="field" />
    <span
      v-if="field.errorMessage"
      class="text-sm text-red-500"
    >
      {{ field.errorMessage }}
    </span>
  </component>
</template>
