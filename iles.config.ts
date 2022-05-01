import { defineConfig } from 'iles'

import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  vite: {
    plugins: [
      WindiCSS()
    ]
  }
})
