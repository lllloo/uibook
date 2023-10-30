import BaseButton from '@/components/base/BaseButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Base/Button',
  component: BaseButton,
  tags: ['autodocs'],
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
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `
  })
}

export const Default = {
  args: {}
}

export const Type = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton>
        Default
      </BaseButton>
      <BaseButton type="primary">
        Primary
      </BaseButton>
      <BaseButton type="success">
        Success
      </BaseButton>
      <BaseButton type="warring">
        Warring
      </BaseButton>
      <BaseButton type="danger">
        Danger
      </BaseButton>
    `
  })
}

export const Size = {
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

export const Outline = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton outline>
        Default
      </BaseButton>
      <BaseButton type="primary" outline>
        Primary
      </BaseButton>
      <BaseButton type="success" outline>
        Success
      </BaseButton>
      <BaseButton type="warring" outline>
        Warring
      </BaseButton>
      <BaseButton type="danger" outline>
        Danger
      </BaseButton>
    `
  })
}
