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
    setup() {
      return { args }
    },
    template: `
      <BaseField v-bind="args">
        <BaseInput label="標題" placeholder="請輸入" />
      </BaseField>
    `
  })
}

export const Default = {}

export const OneLine = {
  args: {
    label: '標題',
    oneLine: true
  }
}
