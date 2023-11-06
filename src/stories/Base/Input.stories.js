import BaseInput from '@/components/base/BaseInput.vue'

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

export const Size = {
  render: (args, { vModel }) => ({
    components: { BaseInput },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseInput v-bind="args" v-model="modelValue" small /> 
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" large />
    `
  })
}

export const Disabled = {
  args: {
    disabled: true
  }
}
