import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/index'
import { Button, Cell, CellGroup, Icon, Image as VanImage, Popup  } from 'vant'
Vue.use(Button).use(Cell).use(CellGroup).use(Icon).use(VanImage).use(Popup)
export default () => {
  console.log('--------------')
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App),
  })

  return {
    app, 
    router
  }
}

