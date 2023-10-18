import BaseCheckout from '@/components/form/BaseCheckout.vue';
import BaseField from '@/components/form/BaseField.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Checkout',
  component: BaseCheckout,
  tags: ['autodocs'],
  argsTypes: {
    modelValue: {
      control: 'boolean',
    }
  },
  args: {
    label: 'Checkout',
    // modelValue: false,
  },
  render: (args, { vModel }) => ({
    components: { BaseCheckout },
    setup() {
      const modelValue = vModel('modelValue')
      const aaa = (value) => {
        console.log(value);
      }
      console.log(args);
      return { args, modelValue, aaa }
    },
    template: `
      <BaseCheckout v-bind="args"  @update:model-value="aaa" />
    `,
  }),
};

export const Primary = {};

export const OutLine = {
  args: {
    outLine: true,
  },
};


export const WithWrap = {
  args: {
    modelValue: []
  },
  render: (args, { vModel }) => ({
    components: { BaseField, BaseCheckout },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <BaseField label="標題">
        <BaseCheckout v-bind="args" v-model="modelValue" value="1" />
        <BaseCheckout v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `,
  }),
};
