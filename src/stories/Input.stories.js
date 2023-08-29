import BaseInput from '@/components/form/BaseInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Input',
  component: BaseInput,
  tags: ['autodocs'],
  // argTypes: {
  //   'v-model': {
  //     control: 'text',
  //   },
  // },
  args: {
    label: '標題',
    placeholder: '請輸入',
  },
  render: (args) => ({
    components: { BaseInput },
    setup() {
      let model = ref('')
      const updateModel = (event) => {
        model.value = event
      }
      return { args, model, updateModel }
    },
    template: `
      <BaseInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
    `,
  }),
};

export const Primary = {
  args: {},
};

export const OneLine = {
  args: {
    oneLine: true
  },
};