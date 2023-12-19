<template>
  <div
    class="base-input"
    :class="{
      'is-disabled': disabled
    }"
  >
    <slot />
    <template v-if="isPassword">
      <IconEye
        v-if="isShowPassword"
        class="password-icon"
        @click="isShowPassword = !isShowPassword"
      />
      <IconEyeSlash
        v-else
        class="password-icon"
        @click="isShowPassword = !isShowPassword"
      >
      </IconEyeSlash>
    </template>
    <input
      v-model="value"
      :class="inputClass"
      :name="name"
      :type="isShowPassword ? 'text' : type"
      :placeholder="placeholder"
      :disabled="disabled"
      :autocomplete="isPassword ? 'off' : 'on'"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const isPassword = computed(() => props.type === 'password')
const isShowPassword = ref(false)
</script>

<style lang="scss" scoped>
input {
  border: none;
  outline: none;
  background: transparent;
}

.base-input {
  --border-size: 1px;
  --padding: calc(var(--base-padding) - var(--border-size));

  --color: var(--color-black);
  --background: var(--color-white);
  --border-color: var(--color-gray);

  position: relative;
  width: 100%;
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  color: var(--color);

  input {
    width: 100%;
    border-radius: inherit;
    padding: var(--padding) calc(var(--padding) * 2);
    border: var(--border-size) solid var(--border-color);
    &:focus {
      --border-color: var(--color-black);
    }
  }

  :deep(svg) {
    fill: currentColor;
  }

  .password-icon {
    width: 16px;
    position: absolute;
    right: calc(var(--padding) * 2);
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
  }

  &.is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
    input {
      cursor: not-allowed;
    }
  }

  // color
  &.primary {
    input:focus {
      --border-color: var(--color-primary);
    }
  }
}
</style>
