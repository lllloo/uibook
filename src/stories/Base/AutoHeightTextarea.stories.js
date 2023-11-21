import AutoHeightTextarea from '@/components/base/AutoHeightTextarea.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: AutoHeightTextarea,
  args: {
    label: '標題',
    placeholder: '請輸入',
    modelValue: ''
  },
  render: (args, { vModel }) => ({
    components: { AutoHeightTextarea },
    setup() {
      const modelValue = vModel('modelValue')
      return { args, modelValue }
    },
    template: `
      <AutoHeightTextarea v-bind="args" v-model="modelValue" />
    `
  })
}

export const Default = {
  args: {}
}

// export const Size = {
//   render: (args, { vModel }) => ({
//     components: { AutoHeightTextarea },
//     setup() {
//       const modelValue = vModel('modelValue')
//       return { args, modelValue }
//     },
//     template: `
//       <AutoHeightTextarea v-bind="args" v-model="modelValue" small /> 
//       <AutoHeightTextarea v-bind="args" v-model="modelValue" />
//       <AutoHeightTextarea v-bind="args" v-model="modelValue" large />
//     `
//   })
// }

// export const Disabled = {
//   args: {
//     disabled: true
//   }
// }
