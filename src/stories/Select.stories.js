import BaseSelect from '@/components/form/BaseSelect.vue'
import BaseField from '@/components/form/BaseField.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Select',
  component: BaseSelect,
  tags: ['autodocs'],
  args: {
    placeholder: '請輸入',
    options: [
      { label: '選項1', value: '1' },
      { label: '選項2', value: '2' },
      { label: '選項3', value: '3' }
    ]
  },
  render: (args, { vModel }) => ({
    components: { BaseSelect },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseSelect v-bind="args" v-model="modelValue" />
    `
  })
}

export const Primary = {
  args: {}
}

export const WithWrap = {
  render: (args, { vModel }) => ({
    components: { BaseField, BaseSelect },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="modelValue" />
      </BaseField>
    `
  })
}
