import BaseButton from '@/components/base/BaseButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseButton,
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

export const Color = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton class="primary">
        Primary
      </BaseButton>
    `
  })
}

export const Type = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton>
        Primary
      </BaseButton>
      <BaseButton radius>
        Primary
      </BaseButton>
      <BaseButton  circle>
        1
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
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton text>
        Button
      </BaseButton>

      <BaseButton class="primary" text>
        Button
      </BaseButton>
    `
  })
}

export const Fill = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton class="fill">
        Button
      </BaseButton>

      <BaseButton class="primary fill">
        Button
      </BaseButton>

      <br>

      <BaseButton class="fill hover:!bg-white hover:!text-black">
        Button
      </BaseButton>

      <BaseButton class="primary fill hover:!bg-white hover:!text-primary">
        Button
      </BaseButton>
    `
  })
}

export const Disable = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton disabled>
        Primary
      </BaseButton>

      <BaseButton class="fill" disabled>
        Button
      </BaseButton>
    `
  })
}
