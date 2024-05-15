<script setup lang="ts">
export interface Props {
  class?: string
  inputClass?: string
  color?: 'black' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  type: 'text' | 'password'
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  inputClass: '',
  color: 'black',
  size: 'md',
  readonly: false,
  disabled: false,
  placeholder: '請輸入',
  type: 'text',
  name: ''
})

defineSlots<{
  prefix(props: {}): any
  suffix(props: {}): any
}>()

const value = defineModel<string>()

const isPassword = computed(() => props.type === 'password')
const isShowPassword = ref(false)

const colors = {
  base: {
    black: 'text-black fill-black',
    primary: 'text-primary fill-primary'
  },
  input: {
    black: 'text-black ring-1 ring-inset ring-black/70 focus:ring-black',
    primary: 'text-primary ring-1 ring-inset ring-primary/70 focus:ring-primary'
  }
}

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

const classes = computed(() => {
  const baseClass = 'relative rounded-md'
  const colorClass = colors.base[props.color]
  return twMerge(baseClass, colorClass, props.class)
})

const inputClasses = computed(() => {
  const baseClass = 'w-full px-4 py-2 rounded-md shadow-md outline-none'
  const colorClass = colors.input[props.color]
  const sizeClass = sizes[props.size]
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  return twMerge(baseClass, colorClass, sizeClass, disabledClass, props.inputClass)
})
</script>

<template>
  <div :class="classes">
    <div
      v-if="$slots.prefix"
      class="absolute left-0 top-1/2 flex w-8 -translate-y-1/2 items-center pl-4"
    >
      <slot name="prefix" />
    </div>
    <input
      v-model="value"
      :class="[inputClasses, $slots.prefix ? 'pl-10' : '']"
      :name="name"
      :type="isShowPassword ? 'text' : type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="isPassword ? 'off' : 'on'"
    />
    <div
      v-if="isPassword || $slots.suffix"
      class="absolute right-0 top-1/2 flex -translate-y-1/2 items-center pr-4"
    >
      <template v-if="$slots.suffix">
        <slot name="suffix" />
      </template>
      <template v-if="isPassword">
        <IconEye
          v-if="isShowPassword"
          class="ml-2 w-5"
          @click="isShowPassword = !isShowPassword"
        />
        <IconEyeSlash
          v-else
          class="ml-2 w-5"
          @click="isShowPassword = !isShowPassword"
        />
      </template>
    </div>
  </div>
</template>
