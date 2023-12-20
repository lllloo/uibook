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
  render: (args, { vModel }) => ({
    components: { BaseCheckbox },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" />
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
  render: (args, { vModel }) => ({
    components: { BaseCheckbox },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    `
  })
}

export const Fill = {
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
    components: { BaseCheckbox },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" class="fill" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" class="primary fill" />
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" class="fill" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="4" class="primary fill" outline />
    `
  })
}

export const Size = {
  render: (args, { vModel }) => ({
    components: { BaseCheckbox },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseCheckbox v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="large" outline />
    `
  })
}

export const Disabled = {
  args: {
    disabled: true
  },
  render: (args, { vModel }) => ({
    components: { BaseCheckbox },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseCheckbox v-bind="args" v-model="modelValue" />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
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
    components: { BaseField, BaseCheckbox },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseCheckbox v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `
  })
}
