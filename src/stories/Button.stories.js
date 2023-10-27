import BaseButton from '@/components/form/BaseButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Button',
  component: BaseButton,
  tags: ['autodocs'],
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `
  })
}

export const Primary = {
  args: {}
}

export const Size = {
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="decorators"><story/></div>'
    })
  ],
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton small>
        Small
      </BaseButton>
      <BaseButton>
        Button
      </BaseButton>
      <BaseButton large>
        Large
      </BaseButton>
    `
  })
}
