import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './style.css';

import { useArgs } from '@storybook/client-api'

export const decorators = [
  (story, context) => {
    const args = context.args
    const [_, updateArgs] = useArgs()
    const vModel = (key) => computed({
      get: () => args[key],
      set: (value) => {
        updateArgs({ ...args ,[key]: value })
      }
    });
    return story({ ...context, vModel })
  }
]

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
