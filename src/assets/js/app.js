import '../css/app.css'

import './lib/loadSvgSprite'

function init() {
  console.log('hello world!')
}

window.addEventListener('DOMContentLoaded', init)

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('HMR')
  })
}
