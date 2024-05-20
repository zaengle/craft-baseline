import 'lite-youtube-embed'
import 'lite-vimeo-embed/module/lite-vimeo-embed'

import 'virtual:svg-icons-register'
import.meta.glob('../img/**/*')

export function init(config = {}) {
  console.log('hello world!', config)
}

window.addEventListener('DOMContentLoaded', () => init(window.APP?.CONFIG || {}))

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('HMR')
  })
}
