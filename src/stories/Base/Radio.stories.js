import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseField from '@/components/base/BaseField.vue'

export default {
  args: {
    label: 'Radio',
    modelValue: ''
  },
  component: BaseRadio,
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
    `
  })
}

export const Default = {}

export const Color = {
  args: {
    class: 'mr-2',
  },
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" color="primary" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" button />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="4" color="primary" button />
    `
  })
}

export const Size = {
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" size="sm" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2"  />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" size="lg" />
    `
  })
}

export const Button = {
  args: {
    class: 'mr-2',
    button: true
  },
}

export const Readonly = {
  args: {
    readonly: true,
    modelValue: '1'
  },
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
    `
  })
}

export const Disabled = {
  args: {
    disabled: true,
    modelValue: '1'
  },
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
    `
  })
}

export const WithWrap = {
  render: (args) => ({
    components: { BaseField, BaseRadio },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
      </BaseField>
    `
  })
}
