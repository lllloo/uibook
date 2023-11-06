import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseField from '@/components/base/BaseField.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseRadio,
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
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
    `
  })
}

export const Default = {}

export const Size = {
  render: (args, { vModel }) => ({
    components: { BaseRadio },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseRadio v-bind="args" v-model="modelValue" value="1" small outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" large outline />
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
    components: { BaseRadio },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
    `
  })
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
