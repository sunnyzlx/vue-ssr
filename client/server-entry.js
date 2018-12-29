import { createApp } from './create-app'
import { resolve } from 'url';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      console.log('matchedComponents', matchedComponents)
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      // 获取数据
      resolve(app)
    })
  })
}
