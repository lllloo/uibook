<script setup lang="ts">
export interface Props {
  class?: string
  inputClass?: string
  modelValue: string
  color?: 'black' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  type: 'text' | 'password' | 'textarea'
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  inputClass: '',
  modelValue: '',
  color: 'black',
  size: 'md',
  readonly: false,
  disabled: false,
  placeholder: '請輸入',
  type: 'text',
  name: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

defineSlots<{
  prefix(props: {}): any
  suffix(props: {}): any
}>()

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const isPassword = computed(() => props.type === 'password')
const isShowPassword = ref(false)

const colorClasses = {
  wrap: {
    black: 'text-black fill-black',
    primary: 'text-primary fill-primary'
  },
  input: {
    black: 'text-black border border-black focus:border-black/50',
    primary: 'text-primary border border-primary focus:border-primary/50'
  }
}

const sizeClasses = {
  input: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
}

const wrapClasses = computed(() => {
  const colorClass = colorClasses.wrap[props.color]
  return twMerge('relative', 'rounded', colorClass, props.class)
})

const inputClasses = computed(() => {
  const baseClass = 'w-full px-4 py-2 rounded-md outline-none'
  const colorClass = colorClasses.input[props.color]
  const sizeClass = sizeClasses.input[props.size]
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  return twMerge(baseClass, colorClass, sizeClass, disabledClass, props.inputClass)
})
</script>

<template>
  <div :class="wrapClasses">
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
