import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import estabelecimento from './estabelecimento'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    estabelecimento
  }
})

export default store
