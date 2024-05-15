import BaseInput from '@/components/base/BaseInput.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  args: {
    placeholder: '請輸入',
    modelValue: ''
  },
  component: BaseInput,
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
  args: {
    color: 'primary'
  },
}

export const Size = {
  render: (args) => ({
    components: { BaseInput },
    setup: () => ({ args }),
    template: `
      <BaseInput v-bind="args" v-model="args.modelValue" size="sm" class="mb-2" /> 
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseInput v-bind="args" v-model="args.modelValue" size="lg" class="mb-2" />
    `
  })
}

export const Icon = {
  render: (args) => ({
    components: { BaseInput, IconSearch },
    setup: () => ({ args }),
    template: `
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" color="primary" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2">
        <template #suffix>
          <IconSearch />
        </template>
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
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" color="primary" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" color="primary">
        <template #suffix>
          <IconSearch />
        </template>
      </BaseInput>
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
  },
}
