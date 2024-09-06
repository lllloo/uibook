<script setup lang="ts">
import { baseCva } from './base'
import { useTextareaAutosize } from '@vueuse/core'
const textarea = cva(['w-full', 'px-4 py-2 rounded-md shadow-md', ...baseCva], {
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

type TextareaVariants = VariantProps<typeof textarea>
export interface Props {
  color?: TextareaVariants['color']
  size?: TextareaVariants['size']
  outline?: TextareaVariants['outline']
  autoHeight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  outline: true,
  autoHeight: false
})

const attrs = useAttrs()
const className = computed(() => {
  return twMerge(
    textarea({
      color: props.color,
      size: props.size,
      outline: props.outline
    }),
    attrs.class as string
  )
})

const value = defineModel<any>()

const textareaRef = ref()
if (props.autoHeight) {
  useTextareaAutosize({
    input: value,
    element: textareaRef,
    styleProp: 'minHeight'
  })
}
</script>

<template>
  <textarea
    v-model="value"
    :class="className"
    rows="2"
    ref="textareaRef"
  />
</template>

<style lang="scss" scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>
