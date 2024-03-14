import BaseInput from '@/components/base/BaseInput.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseInput,
  args: {
    placeholder: '請輸入',
    modelValue: ''
  },
  render: (args) => ({
    components: { BaseInput },
    setup: () => ({ args }),
    template: `
      <BaseInput v-bind="args" v-model="args.modelValue" />
    `
  })
}

export const Default = {
  args: {}
}

export const Color = {
  render: (args) => ({
    components: { BaseInput },
    setup: () => ({ args }),
    template: `
      <BaseInput v-bind="args" v-model="args.modelValue" />
      <BaseInput class="primary" v-bind="args" v-model="args.modelValue" />
    `
  })
}

export const Size = {
  render: (args) => ({
    components: { BaseInput },
    setup: () => ({ args }),
    template: `
      <BaseInput v-bind="args" v-model="args.modelValue" class="small" /> 
      <BaseInput v-bind="args" v-model="args.modelValue" />
      <BaseInput v-bind="args" v-model="args.modelValue" class="large" />
    `
  })
}

export const Icon = {
  render: (args) => ({
    components: { BaseInput },
    setup: () => ({ args }),
    template: `
      <BaseInput v-bind="args" v-model="args.modelValue">
        <IconSearch />
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" class="primary">
        <IconSearch />
      </BaseInput>
    `
  })
}

export const Password = {
  args: {
    type: 'password'
  },
  render: (args) => ({
    components: { BaseInput, IconSearch },
    setup: () => ({ args }),
    template: `
      <BaseInput v-bind="args" v-model="args.modelValue">
        <IconSearch />
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" class="primary">
        <IconSearch />
      </BaseInput>
    `
  })
}

export const Textarea = {
  args: {
    type: 'textarea'
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
  },
  render: (args) => ({
    components: { BaseInput, IconSearch },
    setup: () => ({ args }),
    template: `
      <BaseInput v-bind="args" v-model="args.modelValue" />
      <BaseInput v-bind="args" v-model="args.modelValue">
        <IconSearch />
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" class="primary">
        <IconSearch />
      </BaseInput>
    `
  })
}
