import BaseField from '@/components/base/BaseField.vue'
import BaseInput from '@/components/base/BaseInput.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseField,
  args: {
    label: '標題'
  },
  render: (args) => ({
    components: { BaseField, BaseInput },
    setup: () => ({ args }),
    template: `
      <BaseField v-bind="args">
        <BaseInput placeholder="請輸入" />
      </BaseField>
    `
  })
}

export const Default = {}

export const Color = {
  args: {
    color: 'primary'
  },
  render: (args) => ({
    components: { BaseField, BaseInput },
    setup: () => ({ args }),
    template: `
      <BaseField v-bind="args">
        <BaseInput placeholder="請輸入" color="primary" />
      </BaseField>
    `
  })
}


export const OneLine = {
  args: {
    label: '標題',
    oneLine: true
  }
}

export const Error = {
  args: {
    label: '標題',
    error: '必填'
  },
  render: (args) => ({
    components: { BaseField, BaseInput },
    setup: () => ({ args }),
    template: `
      <BaseField v-bind="args" class="mb-6">
        <BaseInput placeholder="請輸入" />
      </BaseField>
      <BaseField v-bind="args" oneLine>
        <BaseInput placeholder="請輸入" />
      </BaseField>
    `
  })
}
