import BaseRadio from '@/components/form/BaseRadio.vue';
import BaseField from '@/components/form/BaseField.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Radio',
  component: BaseRadio,
  tags: ['autodocs'],
  args: {
    label: 'Radio',
  },
  render: (args) => ({
    components: { BaseRadio },
    setup() {
      let model = ref('')
      const updateModel = (event) => {
        model.value = event
      }
      return { args, model, updateModel }
    },
    template: `
      <BaseRadio v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="1" />
    `,
  }),
};

export const Primary = {
  args: {},
};



export const WithWrap = {
  render: (args) => ({
    components: { BaseField, BaseRadio },
    setup() {
      let model = ref('1')
      const updateModel = (event) => {
        model.value = event
      }
      return { args, model, updateModel }
    },
    template: `
      <BaseField label="標題">
        <BaseRadio v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="1" />
        <BaseRadio v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="2" />
      </BaseField>
    `,
  }),
};
