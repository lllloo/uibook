import BaseButton from '@/components/base/BaseButton.vue'

export default {
  argTypes: {
    color: {
      control: 'text'
    },
    size: {
      control: 'text'
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
  }
}

export const Size = {
  args: {
    class: 'mr-2'
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
      <BaseButton v-bind="args" size="sm">
        Small
      </BaseButton>
      <BaseButton v-bind="args">
        Button
      </BaseButton>
      <BaseButton v-bind="args" size="lg">
        Large
      </BaseButton>
    `
  })
}

export const OutLine = {
  args: {
    outline: true
  }
}

export const Disabled = {
  args: {
    disabled: true
  }
}

export const Link = {
  args: {
    tag: 'a',
    href: 'https://www.google.com',
    target: '_blank'
  }
}
