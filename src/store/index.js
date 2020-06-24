import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/Library/DB'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    products: {}
  },
  getters: {
    getProduct: state => id => {
      return state.products[id]
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    getProducts({ commit }) {
      db.getProducts().then(products => {
        let tempProducts = {}
        console.log('getting products')
        console.log(products)

        products.forEach(product => {
          tempProducts[product.id] = product.data()
        })
        console.log('In state')
        console.log(tempProducts)

        commit('SET_PRODUCTS', tempProducts)
      })
    }
  },
  modules: {
  }
})
