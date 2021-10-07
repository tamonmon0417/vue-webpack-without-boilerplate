import Vue from 'vue'

import App from '@/App'
import router from '@/router'
import vuetify from './plugins/vuetify'

const vm = new Vue({
  router,
  vuetify,
  components: { App },
  template: '<app/>'
})
vm.$mount('#app')
