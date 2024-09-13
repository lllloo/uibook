<script setup lang="ts">
import { cn, baseCva } from './base'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

const variants = cva(['w-full text-left px-4 py-2 rounded-md shadow-md', ...baseCva], {
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
  options?: { label: string; value: string | number }[]
}

withDefaults(defineProps<Props>(), {
  color: 'default',
  size: 'default',
  outline: true,
  placeholder: '請選擇',
  options: () => []
})

const value = defineModel<any>()
</script>

<template>
  <Listbox
    v-model="value"
    as="div"
  >
    <div class="relative">
      <ListboxButton :class="cn(variants({ color, size, outline }), $attrs.class ?? '')">
        {{ value?.label || placeholder }}
      </ListboxButton>
      <ListboxOptions
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-black bg-white"
      >
        <ListboxOption
          v-for="item in options"
          v-slot="{ active, selected }"
          :key="item.value"
          class="py-1"
          :value="item"
          as="template"
        >
          <li
            :class="[
              selected ? 'bg-gray-300' : '',
              active ? 'bg-gray-200' : '',
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
