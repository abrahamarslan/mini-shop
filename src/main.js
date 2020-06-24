import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'firebase/auth'
import {FirebaseApp} from '@/Library/DB'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bulma/css/bulma.css'

library.add(faUserSecret)
Vue.component('fa-icon', FontAwesomeIcon)
Vue.filter('price', price => Intl.NumberFormat('en-IN', { style: 'currency', currency: 'EUR' }).format(price))

Vue.config.productionTip = false

/**
 * Custom code for Firebase Application
 */
let baseApp
FirebaseApp.auth().onAuthStateChanged(() => {
  if(!baseApp) {
    baseApp = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    
  }
})


