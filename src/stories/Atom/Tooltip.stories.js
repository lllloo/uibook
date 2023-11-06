import BaseTooltip from '@/components/atom/BaseTooltip.vue'
import BaseButton from '@/components/base/BaseButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: BaseTooltip,
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `
    })
  ],
  render: (args, { vModel }) => ({
    components: { BaseTooltip, BaseButton },
    setup() {
      const modelValue = vModel('modelValue')
      const buttonRef = ref()
      const isFocus = ref(false)
      return { args, modelValue, buttonRef, isFocus }
    },
    template: `
      <BaseButton ref="buttonRef" @click="isFocus = !isFocus">
        Default
        <BaseTooltip v-if="isFocus" :reference="buttonRef">
          123
        </BaseTooltip>
      </BaseButton>
    `
  })
}

export const Default = {
  args: {}
}
