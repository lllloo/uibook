<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
const select = cva(
  [
    'w-full text-left',
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

type SelectVariants = VariantProps<typeof select>
export interface Props {
  color?: SelectVariants['color']
  size?: SelectVariants['size']
  outline?: SelectVariants['outline']
  options?: { label: string; value: string | number }[]
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  outline: true,
  placeholder: '請選擇'
})

const attrs = useAttrs()
const className = computed(() => {
  return twMerge(
    select({
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
  <Listbox
    as="div"
    v-model="value"
  >
    <div class="relative">
      <ListboxButton :class="className">{{ value?.label || placeholder }}</ListboxButton>
      <ListboxOptions
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-black bg-white"
      >
        <ListboxOption
          class="py-1"
          v-slot="{ active, selected }"
          v-for="item in options"
          :key="item.value"
          :value="item"
          as="template"
        >
          <li
            :class="[
              selected ? 'bg-amber-500 text-white' : '',
              active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
              'cursor-default select-none px-4 py-[7px]'
            ]"
          >
            {{ item.label }}
          </li>
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>

<style lang="scss" scoped></style>
