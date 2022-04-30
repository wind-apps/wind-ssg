import {defineConfig} from 'vite-plugin-windicss'

export default defineConfig({
  attributify: true,
  theme: {
    fontFamily: {
      sans: ['Open Sans'],
      serif: ['Neuton'],
      display: ['Open Sans'],
      body: ['Open Sans']
    }
  }
})
