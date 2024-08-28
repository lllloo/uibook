import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseField from '@/components/base/BaseField.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseSelect,
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `
    })
  ],
  args: {
    placeholder: '請輸入',
    options: [
      { label: '選項1', value: '1' },
      { label: '選項2', value: '2' },
      { label: '選項3', value: '3' }
    ]
  },
  render: (args) => ({
    components: { BaseSelect },
    setup: () => ({ args }),
    template: `
      <BaseSelect v-bind="args" v-model="args.modelValue" />
    `
  })
}

export const Default = {
  args: {}
}

export const Size = {
  render: (args) => ({
    components: { BaseSelect },
    setup: () => ({ args }),
    template: `
      <BaseSelect v-bind="args" v-model="args.modelValue" size="sm" class="mb-2"  />
      <BaseSelect v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseSelect v-bind="args" v-model="args.modelValue" size="lg" />
    `
  })
}

export const Disabled = {
  args: {
    disabled: true
  }
}
