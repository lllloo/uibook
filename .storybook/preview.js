import '@/style/main.css'
import './decorators.css'

import { useArgs } from '@storybook/client-api'

export const decorators = [
  (story, context) => {
    const args = context.args
    const [_, updateArgs] = useArgs()
    const vModel = (key) =>
      computed({
        get: () => args[key],
        set: (value) => {
          updateArgs({ ...args, [key]: value })
        }
      })
    return story({ ...context, vModel })
  },
  (story) => ({
    components: { story },
    template: `
      <div class="decorators">
        <story/>
      </div>
    `
  })
]

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
