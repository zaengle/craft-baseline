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
