import BaseButton from '@/components/form/BaseButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Button',
  component: BaseButton,
  tags: ['autodocs'],
  // argTypes: {
  //   'v-model': {
  //     control: 'text',
  //   },
  // },
  args: {
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      const onClick = () => {
        console.log('onClick');
      }
      return { args, onClick }
    },
    template: `
      <BaseButton v-bind="args" @onClick="onClick">
        Button
      </BaseButton>
    `,
  }),
};

export const Primary = {
  args: {},
};