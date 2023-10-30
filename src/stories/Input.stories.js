import BaseInput from '@/components/base/BaseInput.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Input',
  component: BaseInput,
  tags: ['autodocs'],
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

export const Primary = {
  args: {}
}

export const OneLine = {
  args: {
    oneLine: true
  }
}
