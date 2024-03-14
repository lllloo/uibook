import '@/style/main.css'
import { worker } from '@/mocks/browser';
// import { useArgs } from '@storybook/client-api'

worker.start();
/** @type { import('@storybook/vue3').Preview } */
const preview = {
//   parameters: {
//     // actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/
//       }
//     }
//   }
}

export default preview
