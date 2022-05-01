import { defineConfig } from 'iles'

import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  modules: ['@islands/prism'],
  vite: {
    plugins: [
      WindiCSS()
    ]
  }
})
