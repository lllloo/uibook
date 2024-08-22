<script setup lang="ts">
const checkbox = cva(
  [
    'h-4 w-4 rounded shadow-md',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'transition-colors',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'appearance-none'
  ],
  {
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
  }
)

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

const value = defineModel<string | number>()
</script>

<template>
  <input
    v-model="value"
    :class="className"
    type="checkbox"
  />
</template>
