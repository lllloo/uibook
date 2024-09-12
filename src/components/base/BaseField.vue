<script setup lang="ts">
import { Field } from 'vee-validate'

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
  label?: string
  name?: string
  modelValue?: any
}

const props = withDefaults(defineProps<Props>(), {
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
    <div :class="className">
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
