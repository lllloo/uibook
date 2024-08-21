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
        v-model="args.modelValue"
        v-slot="{ field }"
        class="mb-4"
      >
        <BaseInput
          v-model="field.value"
          :name="field.name"
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
