import BaseTextarea from '@/components/base/BaseTextarea.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseTextarea,
  args: {
    label: '標題',
    placeholder: '請輸入',
    modelValue: ''
  },
  render: (args, { vModel }) => ({
    components: { BaseTextarea },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseTextarea v-bind="args" v-model="modelValue" />
    `
  })
}

export const Default = {
  args: {}
}

export const Size = {
  render: (args, { vModel }) => ({
    components: { BaseTextarea },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseTextarea v-bind="args" v-model="modelValue" class="small" /> 
      <BaseTextarea v-bind="args" v-model="modelValue" />
      <BaseTextarea v-bind="args" v-model="modelValue" class="large" />
    `
  })
}

export const Disabled = {
  args: {
    disabled: true
  }
}
