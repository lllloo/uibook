import BaseButton from '@/components/base/BaseButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  argTypes: {
    color: {
      control: 'text',
    },
    size: {
      control: 'text',
    }
  },
  component: BaseButton,
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
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

export const Color = {
  args: {
    color: 'primary'
  },
}

export const Size = {
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
      <BaseButton size="sm" class="mr-2">
        Small
      </BaseButton>
      <BaseButton class="mr-2">
        Button
      </BaseButton>
      <BaseButton size="lg">
        Large
      </BaseButton>
    `
  })
}

export const OutLine = {
  args: {
    outline: true
  },
}

export const Text = {
  args: {
    color: 'transparent',
    outline: true
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
      <BaseButton color="transparent" class="mr-2">
        Transparent
      </BaseButton>
      <BaseButton color="transparent" outline>
        Transparent Outline
      </BaseButton>
    `
  })
}

export const Disabled = {
  args: {
    disabled: true
  },
}
