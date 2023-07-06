import 'lite-youtube-embed'
import 'lite-vimeo-embed/module/lite-vimeo-embed'

import 'virtual:svg-icons-register'
import.meta.glob('../img/**/*')

export function init() {
  console.log('hello world!')
}

window.addEventListener('DOMContentLoaded', init)

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('HMR')
  })
}
