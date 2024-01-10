import '@/style/main.css'
import { worker } from '@/mocks/browser';
import { useArgs } from '@storybook/client-api'

worker.start();
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
  }
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
