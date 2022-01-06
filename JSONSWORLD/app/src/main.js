import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

Vue.use(antd)

axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  // return error.response.data.msg
  return Promise.reject(error.response)
})

Vue.prototype.$get = (k) => {
  if (localStorage.getItem(k)) {
    return JSON.parse(localStorage.getItem(k))
  }
  return null
}

Vue.prototype.$store = (k, v) => {
  if (v) {
    localStorage.setItem(k, JSON.stringify(v))
  } else {
    localStorage.removeItem(k)
  }
  return v
}

Vue.prototype.$http = (method, url, data = {}) => {
  let baseUrl = `http://localhost/JSONSWORLD/scheduleApi/api/v1/${url}`
  if (app.user) {
    baseUrl = `http://localhost/JSONSWORLD/scheduleApi/api/v1/${url}?token=${app.user.token}`
  }
  return axios({
    method: method,
    url: baseUrl,
    data: data
  })
}

const app = new Vue({
  router,
  store,
  data () {
    return {
      user: '123'
    }
  },
  created () {
    // this.user = this.$get('user')
  },
  render: h => h(App)
}).$mount('#app')
