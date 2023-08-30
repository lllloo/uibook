import BaseInput from '@/components/form/BaseInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Input',
  component: BaseInput,
  tags: ['autodocs'],
  args: {
    label: '標題',
    placeholder: '請輸入',
    value: ''
  },
  render: (args, { updateArgs }) => ({
    components: { BaseInput },
    setup() {
      const value = computed({
        get: () => args.value,
        set: (value) => updateArgs({ value })
      })
      return { args, value }
    },
    template: `
      <BaseInput v-bind="args" v-model="value" />
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