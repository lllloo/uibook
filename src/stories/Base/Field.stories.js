import BaseField from '@/components/base/BaseField.vue'
import BaseInput from '@/components/base/BaseInput.vue'

export default {
  component: BaseField,
  args: {
    label: '標題',
    name: 'name',
    modelValue: ''
  },
  render: (args) => ({
    components: { BaseField, BaseInput },
    setup: () => ({ args }),
    template: `
      <BaseField
        v-bind="args"
        v-slot="{ field }"
        v-model="args.modelValue"
        class="mb-4"
        name="test"
      >
        <BaseInput
          v-bind="field"
          placeholder="請輸入"
        />
      </BaseField>
    `
  })
}

export const Default = {}

export const Color = {
  args: {
    color: 'primary'
  }
}
