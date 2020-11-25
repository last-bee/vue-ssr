// 渲染首屏
console.log('----createApp----')

import createApp from './create-app'

export default context => {
  return new Promise((resolve, inject) => {
    const { app, router } = createApp()
    console.log('----router----', router)

    router.push(context.url)

    router.onReady(() => {
      resolve(app)
    }, inject)
  })
}