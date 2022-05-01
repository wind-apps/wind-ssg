import { defineApp } from 'iles'

import 'virtual:windi.css'
import '@fontsource/neuton'
import '@fontsource/open-sans'

export default defineApp({
  socialTags: false,
  head: {
    title: 'Wind SSG',
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    meta: [
      {name: 'description', content: 'A new static site generator, built with next-gen tooling' },
      {property: 'generator', content: 'wind' },
    ]
  }
})
