import BaseSelect from '@/components/form/BaseSelect.vue';
import BaseField from '@/components/form/BaseField.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Select',
  component: BaseSelect,
  tags: ['autodocs'],
  // argTypes: {
  //   'v-model': {
  //     control: 'text',
  //   },
  // },
  args: {
    label: '標題',
    placeholder: '請輸入',
    options: [
      { label: '選項1', value: '1' },
      { label: '選項2', value: '2' },
      { label: '選項3', value: '3' },
    ]
  },
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      let model = ref('')
      const updateModel = (event) => {
        model.value = event
      }
      return { args, model, updateModel }
    },
    template: `
      <BaseSelect v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
    `,
  }),
};

export const Primary = {
  args: {},
};



export const WithWrap = {
  render: (args) => ({
    components: { BaseField, BaseSelect },
    setup() {
      let model = ref('')
      const updateModel = (event) => {
        model.value = event
      }
      return { args, model, updateModel }
    },
    template: `
      <BaseField label="標題">
        <BaseSelect v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
      </BaseField>
    `,
  }),
};
