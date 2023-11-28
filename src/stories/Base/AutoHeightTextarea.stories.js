import BaseAutoHeightTextarea from '@/components/base/BaseAutoHeightTextarea.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseAutoHeightTextarea,
  args: {
    label: '標題',
    placeholder: '請輸入',
    modelValue: ''
  },
  render: (args, { vModel }) => ({
    components: { BaseAutoHeightTextarea },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" />
    `
  })
}

export const Default = {
  args: {}
}

export const Size = {
  render: (args, { vModel }) => ({
    components: { BaseAutoHeightTextarea },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="small" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="large" />
    `
  })
}

export const Disabled = {
  args: {
    disabled: true
  }
}
