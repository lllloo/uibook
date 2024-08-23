<script setup lang="ts">
const input = cva(
  [
    'w-full',
    'px-4 py-2 rounded-md shadow-md',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'transition-colors',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ],
  {
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
  }
)

type InputVariants = VariantProps<typeof input>
export interface Props {
  color?: InputVariants['color']
  size?: InputVariants['size']
  outline?: InputVariants['outline']
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  outline: true,
  tag: 'input'
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
const isPassword = computed(() => attrs.type === 'password')
</script>

<template>
  <component
    v-model="value"
    :is="tag"
    :class="className"
    :autocomplete="isPassword ? 'off' : 'on'"
  />
</template>
