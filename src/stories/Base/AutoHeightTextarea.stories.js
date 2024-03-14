import BaseAutoHeightTextarea from '@/components/base/BaseAutoHeightTextarea.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseAutoHeightTextarea,
  args: {
    placeholder: '請輸入',
    modelValue: ''
  },
  render: (args) => ({
    components: { BaseAutoHeightTextarea },
    setup: () => ({ args }),
    template: `
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" />
    `
  })
}

export const Default = {
  args: {}
}

export const Size = {
  render: (args) => ({
    components: { BaseAutoHeightTextarea },
    setup: () => ({ args }),
    template: `
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" class="small" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" class="large" />
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
