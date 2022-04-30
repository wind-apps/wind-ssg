import { defineConfig } from 'iles'

import WindiCSS from 'vite-plugin-windicss'
import ViteFonts from 'vite-plugin-fonts'

export default defineConfig({
  vite: {
    plugins: [
      WindiCSS(),
      ViteFonts({
        google: {
          families: [
            {
              name: 'Neuton',
              styles: 'ital,wght@0,400;0,700;1,400'
            },
            {
              name: 'Open Sans',
              styles: 'wght@400'
            }
          ]
        },
      })
    ]
  }
})
