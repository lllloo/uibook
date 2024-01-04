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

export const Icon = {
  render: (args, { vModel }) => ({
    components: { BaseInput, IconSearch },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseInput v-bind="args" v-model="modelValue">
        <IconSearch />
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary">
        <IconSearch />
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
      <BaseInput v-bind="args" v-model="modelValue">
        <IconSearch />
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary">
        <IconSearch />
      </BaseInput>
    `
  })
}

export const Readonly = {
  args: {
    readonly: true
  }
}

export const Disabled = {
  args: {
    disabled: true
  }
}
