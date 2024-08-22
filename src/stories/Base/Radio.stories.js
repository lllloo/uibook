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
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
        <span class="ml-2">
          1
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
        <span class="ml-2">
          2
        </span>
      </label>
    `
  })
}

export const Default = {}

export const Color = {
  args: {
    class: 'mr-2'
  },
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="1" color="primary" />
        <span class="ml-2">
          1
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="2" color="primary" />
        <span class="ml-2">
          2
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="3" color="primary" />
        <span class="ml-2">
          3
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="4" color="primary" />
        <span class="ml-2">
          4
        </span>
      </label>
    `
  })
}

export const Size = {
  render: (args) => ({
    components: { BaseRadio },
    setup: () => ({ args }),
    template: `
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="sm" size="sm" />
        <span class="ml-2">
          sm
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="default" />
        <span class="ml-2">
          default
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="lg" size="lg" />
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
