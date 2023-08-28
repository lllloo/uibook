import BaseField from '@/components/form/BaseField.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Field',
  component: BaseField,
  tags: ['autodocs'],
  argTypes: {
    'v-model': {
      control: 'text',
    },
  },
  args: {
    label: '標題',
  },
  render: (args) => ({
    components: { BaseField },
    setup() {
      return { args };
    },
    template: `
      <BaseField v-bind="args">
        <div>內容</div>
      </BaseField>
    `,
  }),
};

export const Primary = {};

export const OneLine = {
  args: {
    label: '標題2',
    oneLine: true
  },
};