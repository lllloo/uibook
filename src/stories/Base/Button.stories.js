import BaseButton from '@/components/base/BaseButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
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
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
      <BaseButton class="primary">
        Primary
      </BaseButton>
    `
  })
}

export const Size = {
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
      <BaseButton class="small">
        Small
      </BaseButton>
      <BaseButton>
        Button
      </BaseButton>
      <BaseButton class="large">
        Large
      </BaseButton>
    `
  })
}

export const Text = {
  args: {
    text: true
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
      <BaseButton v-bind="args">
        Button
      </BaseButton>

      <BaseButton v-bind="args" class="primary">
        Button
      </BaseButton>
    `
  })
}

export const OutLine = {
  args: {
    outline: true
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
    <BaseButton v-bind="args">
    Button
  </BaseButton>

  <BaseButton v-bind="args" class="primary">
    Button
  </BaseButton>
    `
  })
}

export const Disable = {
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
      <BaseButton disabled>
        Primary
      </BaseButton>

      <BaseButton class="primary" disabled>
        Button
      </BaseButton>
    `
  })
}
