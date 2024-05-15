import BaseAutoHeightTextarea from '@/components/base/BaseAutoHeightTextarea.vue'

export default {
  args: {
    placeholder: '請輸入',
    modelValue: ''
  },
  component: BaseAutoHeightTextarea,
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
  args: {
    class: 'mb-2'
  },
  render: (args) => ({
    components: { BaseAutoHeightTextarea },
    setup: () => ({ args }),
    template: `
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" size="sm" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" size="lg" />
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
