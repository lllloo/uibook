import BaseTextarea from '@/components/base/BaseTextarea.vue'

export default {
  args: {
    placeholder: '請輸入',
    modelValue: ''
  },
  component: BaseTextarea,
  render: (args) => ({
    components: { BaseTextarea },
    setup: () => ({ args }),
    template: `
      <BaseTextarea v-bind="args" v-model="args.modelValue" />
    `
  })
}

export const Default = {
  args: {}
}

export const Color = {
  args: {
    color: 'primary'
  }
}

export const Size = {
  render: (args) => ({
    components: { BaseTextarea },
    setup: () => ({ args }),
    template: `
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="sm" class="mb-2" /> 
      <BaseTextarea v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="lg" class="mb-2" />
    `
  })
}

export const OutLine = {
  args: {
    outline: false
  }
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

export const AutoHeight = {
  args: {
    autoHeight: true
  }
}
