import BaseInput from '@/components/base/BaseInput.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseInput,
  args: {
    label: '標題',
    placeholder: '請輸入',
    modelValue: ''
  },
  render: (args, { vModel }) => ({
    components: { BaseInput },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseInput v-bind="args" v-model="modelValue" />
    `
  })
}

export const Default = {
  args: {}
}

export const Color = {
  render: (args, { vModel }) => ({
    components: { BaseInput },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput class="primary" v-bind="args" v-model="modelValue" />
    `
  })
}

export const Type = {
  render: (args, { vModel }) => ({
    components: { BaseInput },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="radius" />
    `
  })
}

export const Size = {
  render: (args, { vModel }) => ({
    components: { BaseInput },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseInput v-bind="args" v-model="modelValue" class="small" /> 
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="large" />
    `
  })
}

export const Disabled = {
  args: {
    disabled: true
  }
}

export const Icon = {
  render: (args, { vModel }) => ({
    components: { BaseInput, IconSearch },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseInput v-bind="args" v-model="modelValue" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
          <IconSearch />
        </span>
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
          <IconSearch />
        </span>
      </BaseInput>
    `
  })
}

export const Password = {
  args: {
    type: 'password'
  },
  render: (args, { vModel }) => ({
    components: { BaseInput, IconSearch },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseInput v-bind="args" v-model="modelValue" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <IconSearch />
        </span>
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <IconSearch />
        </span>
      </BaseInput>
    `
  })
}
