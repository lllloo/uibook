import BaseCheckout from '@/components/form/BaseCheckout.vue';
import BaseField from '@/components/form/BaseField.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Checkout',
  component: BaseCheckout,
  tags: ['autodocs'],
  args: {
    label: 'Checkout',
  },
  render: (args) => ({
    components: { BaseCheckout },
    setup() {
      let model = ref(false)
      const updateModel = (event) => {
        model.value = event
      }
      return { args, model, updateModel }
    },
    template: `
      <BaseCheckout v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
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
  render: (args) => ({
    components: { BaseField, BaseCheckout },
    setup() {
      let model = ref([])
      const updateModel = (event) => {
        model.value = event
      }
      return { args, model, updateModel }
    },
    template: `
      <BaseField label="標題">
        <BaseCheckout v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="1" />
        <BaseCheckout v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="2" />
      </BaseField>
    `,
  }),
};
