import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseField from '@/components/base/BaseField.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseRadio,
  args: {
    label: 'Radio',
    modelValue: ''
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

export const Default = {}

export const Outline = {
  args: {
    outline: true
  }
}

export const Color = {
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" class="primary" />
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" outline />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="4" class="primary" outline />
    `
  })
}

export const Button = {
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" isButton />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" isButton />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" isButton />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="4" class="primary" isButton />
    `
  })
}

export const Size = {
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" class="small" outline />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" class="large" outline />
    `
  })
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
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" outline />
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
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" outline />
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
