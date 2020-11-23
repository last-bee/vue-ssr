// 渲染首屏
console.log('----createApp----')

import createApp from './create-app'

console.log('----createApp----')
export default context => {
  return new Promise((resolve, inject) => {
    const { app, router } = createApp()

    router.push(context.url)

    router.onReady(() => {
      resolve(app)
    }, inject)
  })
}