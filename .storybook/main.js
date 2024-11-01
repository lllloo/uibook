/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    // 全域開啟自動文檔案
    autodocs: true
  },
  // WSS 連接到 GitHub Codespace 失敗而導致重新載入循環
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite')

    return mergeConfig(config, {
      server: {
        hmr: {
          clientPort: process.env.CODESPACES ? 443 : undefined // <== this is the magic
        }
      }
    })
  }
}
export default config
