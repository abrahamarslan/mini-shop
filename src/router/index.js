import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import 'firebase/auth'
import {FirebaseApp} from '@/Library/DB'
import AdminProduct from '@/components/Admin/Product.vue'
import AdminLogin from '@/components/Admin/Login.vue'
import Products from '@/components/Products.vue'
import Product from '@/components/Product.vue'
Vue.use(VueRouter)

  const routes = [
  { path: '/', component: Products },
  { path: '/product/:id', component: Product },
  {
    path: '/admin',
    component: {render (c) {return c('router-view')}},
    beforeEnter(to, _from, next) {
      let auth = FirebaseApp.auth()
      if(auth.currentUser === null && to.path !== '/admin/login') {
        next({
          path: '/admin/login'
        })
      } else if(auth.currentUser !== null && to.path === '/admin/login') {
          next({
            path: '/admin/products'
          })
      } else {
        next()
      }
    },
    children: [
      {path: 'login', component: AdminLogin},
      {path: 'products', component: AdminProduct}
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
