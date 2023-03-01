import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '@/styles/index.scss'
import '@/assets/css/commom.css'
import App from './App'
import store from './store'
import router from './router'
import '@/icons'
import countTo from 'vue-count-to'
// 引用富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import '@/assets/css/fw.scss'
Vue.prototype.setSessionItem = function(key, newVal) {
  // 创建 StorageEvent 事件
  const newStorageEvent = document.createEvent('StorageEvent')
  const storage = {
    setItem: function(k, val) {
      sessionStorage.setItem(k, val)

      // 初始化 StorageEvent 事件
      newStorageEvent.initStorageEvent(
        'setItem', // 事件别名
        false,
        false,
        k,
        null,
        val,
        null,
        null
      )

      // 派发事件
      window.dispatchEvent(newStorageEvent)
    }
  }
  return storage.setItem(key, newVal)
}
Vue.use(VueQuillEditor)
Vue.component('countTo', countTo)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
