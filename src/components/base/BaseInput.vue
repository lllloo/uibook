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
  name: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 2
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String,
    default: ''
  },
  inputStyle: {
    type: Object,
    default: () => ({})
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

<template>
  <div
    class="base-input"
    :class="{
      'has-icon': $slots.default,
      'is-password': isPassword,
      'is-disabled': disabled,
    }"
  >
    <span
      v-if="$slots.default"
      class="icon"
    >
      <slot />
    </span>

    <textarea
      v-if="type === 'textarea'"
      v-model="value"
      :class="inputClass"
      :style="inputStyle"
      :name="name"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
    />
    <input
      v-else
      v-model="value"
      :class="inputClass"
      :style="inputStyle"
      :name="name"
      :type="isShowPassword ? 'text' : type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="isPassword ? 'off' : 'on'"
    />
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
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
input,
textarea {
  border: none;
  outline: none;
  background: transparent;
}

.base-input {
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  border-radius: var(--base-border-radius);
  padding: 0;

  position: relative;
  width: 100%;

  --color: var(--base-color);
  --sub-color: var(--base-sub-color);
  color: var(--color);
  background: var(--sub-color);

  input,
  textarea {
    width: 100%;
    padding: var(--base-padding) calc(var(--base-padding) * 2);
    border-radius: inherit;
    border: var(--base-border-size) solid var(--base-border-color);

    &:focus {
      border-color: var(--color);
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  :deep(svg) {
    fill: currentColor;
  }

  .icon {
    position: absolute;
    left: calc(var(--base-padding) * 2);
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.7;
    @at-root .is-disabled#{&} {
      opacity: 0.5;
    }
  }

  .password-icon {
    width: 16px;
    position: absolute;
    right: calc(var(--base-padding) * 2);
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    @at-root .is-disabled#{&} {
      opacity: 0.5;
    }
  }

  &.has-icon {
    input {
      padding-left: calc(var(--base-padding) * 5);
    }
  }

  &.is-password {
    input {
      padding-right: calc(var(--base-padding) * 5);
    }
  }
}
</style>
