import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseField from '@/components/base/BaseField.vue'

export default {
  argTypes: {
    modelValue: {
      control: 'boolean',
      name: 'v-model'
    }
  },
  args: {
    label: 'Checkout'
  },
  component: BaseCheckbox,
  render: (args) => ({
    components: { BaseCheckbox },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" />
        <span class="ml-2">
          標題
        </span>
      </label>
    `
  })
}

export const Default = {}

export const Color = {
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    class: 'mr-2',
    modelValue: []
  },
  render: (args) => ({
    components: { BaseCheckbox },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" color="primary" />
        <span class="ml-2">
          1
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" color="primary" />
        <span class="ml-2">
          2
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" color="primary" />
        <span class="ml-2">
          3
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" color="primary" />
        <span class="ml-2">
          4
        </span>
      </label>
    `
  })
}

export const Size = {
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    modelValue: []
  },
  render: (args) => ({
    components: { BaseCheckbox },
    setup: () => ({ args }),
    template: `
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="sm" size="sm" />
        <span class="ml-2">
          sm
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="default" />
        <span class="ml-2">
          default
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="lg" size="lg" />
        <span class="ml-2">
          lg
        </span>
      </label>
    `
  })
}

export const Disabled = {
  args: {
    disabled: true
  }
}
