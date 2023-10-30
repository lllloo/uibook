import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseField from '@/components/base/BaseField.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Radio',
  component: BaseRadio,
  tags: ['autodocs'],
  args: {
    label: 'Radio',
    modelValue: ''
  },
  render: (args, { vModel }) => ({
    components: { BaseRadio },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
    `
  })
}

export const Primary = {}

export const OutLine = {
  args: {
    outLine: true
  }
}

export const WithWrap = {
  render: (args, { vModel }) => ({
    components: { BaseField, BaseRadio },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `
  })
}
