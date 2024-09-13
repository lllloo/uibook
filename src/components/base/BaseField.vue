<script setup lang="ts">
import { cn } from './base'
import { Field } from 'vee-validate'

const variants = cva(['w-full', 'transition-colors'], {
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
  }
})

type Variants = VariantProps<typeof variants>
export interface Props {
  color?: Variants['color']
  size?: Variants['size']
  label?: string
  name?: string
  modelValue?: any
}

const props = withDefaults(defineProps<Props>(), {
  color: 'default',
  size: 'default',
  label: '',
  name: '',
  modelValue: ''
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

const id = computed(() => `field-${props.name}`)
</script>

<template>
  <Field
    v-slot="{ field, errorMessage }"
    v-model="value"
    :name="name"
  >
    <div :class="cn(variants({ color, size }), $attrs.class ?? '')">
      <label
        v-if="props.label"
        :for="id"
        class="mb-1 block text-base font-bold"
      >
        {{ props.label }}
      </label>
      <slot :field="{ id, ...field }" />
      <div
        v-if="errorMessage"
        class="text-sm text-red-500"
      >
        {{ errorMessage }}
      </div>
    </div>
  </Field>
</template>
