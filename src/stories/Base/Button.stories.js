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

export const Text = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton type="primary" text>
        Primary
      </BaseButton>
      <BaseButton type="success" text>
        Success
      </BaseButton>
      <BaseButton type="warring" text>
        Warring
      </BaseButton>
      <BaseButton type="danger" text>
        Danger
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

      <br>

      <BaseButton type="primary" radius>
        Primary
      </BaseButton>
      <BaseButton type="success" radius>
        Success
      </BaseButton>
      <BaseButton type="warring" radius>
        Warring
      </BaseButton>
      <BaseButton type="danger" radius>
        Danger
      </BaseButton>

      <br>

      <BaseButton type="primary" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="success" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="warring" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="danger" circle>
        <i class="fas fa-search"></i>
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

export const Outline = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
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

      <br>

      <BaseButton type="primary" radius outline>
        Primary
      </BaseButton>
      <BaseButton type="success" radius outline>
        Success
      </BaseButton>
      <BaseButton type="warring" radius outline>
        Warring
      </BaseButton>
      <BaseButton type="danger" radius outline>
        Danger
      </BaseButton>

      <br>

      <BaseButton type="primary" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="success" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="warring" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="danger" circle outline>
        <i class="fas fa-search"></i>
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
      <BaseButton type="primary" disable>
        Primary
      </BaseButton>
      <BaseButton type="success" disable>
        Success
      </BaseButton>
      <BaseButton type="warring" disable>
        Warring
      </BaseButton>
      <BaseButton type="danger" disable>
        Danger
      </BaseButton>
    `
  })
}
