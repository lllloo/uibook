import BaseCheckout from '@/components/base/BaseCheckout.vue'
import BaseField from '@/components/base/BaseField.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseCheckout,
  argTypes: {
    modelValue: {
      control: 'boolean',
      name: 'v-model'
    }
  },
  args: {
    label: 'Checkout'
  },
  render: (args, { vModel }) => ({
    components: { BaseCheckout },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseCheckout v-bind="args" v-model="modelValue" />
    `
  })
}

export const Default = {}

export const Size = {
  render: (args, { vModel }) => ({
    components: { BaseCheckout },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseCheckout v-bind="args" v-model="modelValue" small outline />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" large outline />
    `
  })
}

export const Outline = {
  args: {
    outline: true
  }
}

export const Disabled = {
  args: {
    disabled: true
  },
  render: (args, { vModel }) => ({
    components: { BaseCheckout },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseCheckout v-bind="args" v-model="modelValue" />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
    `
  })
}

export const WithWrap = {
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    modelValue: []
  },
  render: (args, { vModel }) => ({
    components: { BaseField, BaseCheckout },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseField label="標題">
        <BaseCheckout v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckout v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `
  })
}
