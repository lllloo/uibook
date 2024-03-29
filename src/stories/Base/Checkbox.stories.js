import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseField from '@/components/base/BaseField.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseCheckbox,
  argTypes: {
    modelValue: {
      control: 'boolean',
      name: 'v-model'
    }
  },
  args: {
    label: 'Checkout'
  },
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
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" class="primary" />
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" outline />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" class="primary" outline />
    `
  })
}

export const Button = {
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
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" isButton />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" isButton />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" isButton />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" class="primary" isButton />
    `
  })
}

export const Size = {
  render: (args) => ({
    components: { BaseCheckbox },
    setup: () => ({ args }),
    template: `
      <BaseCheckbox v-bind="args" v-model="args.modelValue" class="small" outline />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" class="large" outline />
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
