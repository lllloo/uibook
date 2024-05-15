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
      <BaseCheckbox v-bind="args" v-model="args.modelValue" />
    `
  })
}

export const Default = {}

export const Outline = {
  args: {
    outline: true
  }
}

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
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" color="primary" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" button />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" color="primary" button />
    `
  })
}

export const Button = {
  args: {
    button: true
  },
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
      <BaseCheckbox v-bind="args" v-model="args.modelValue" size="sm" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" size="lg" />
    `
  })
}

export const Readonly = {
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    readonly: true,
    modelValue: ['1']
  },
  render: (args) => ({
    components: { BaseCheckbox },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" outline />
    `
  })
}

export const Disabled = {
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    disabled: true,
    modelValue: ['1']
  },
  render: (args) => ({
    components: { BaseCheckbox },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" outline />
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
  render: (args) => ({
    components: { BaseField, BaseCheckbox },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" />
      </BaseField>
    `
  })
}
