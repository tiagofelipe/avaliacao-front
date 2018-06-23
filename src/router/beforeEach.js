import store from '../store'
import { includes } from 'lodash'
import auth from '../domain/auth/services/auth'
import EstabelecimentoService from '../domain/estabelecimento/services/estabelecimento'

const isAuthRoute = route => route.path.indexOf('/auth') !== -1
const isLogged = () => store.getters.isLogged

// insert public routes here
const publicRoutes = []

export default (to, from, next) => {
  // --------- only for debugging
  console.log('não é auth', !isAuthRoute(to), to.path)
  console.log('não está logado', !isLogged())
  console.log('não é rota pública', !includes(publicRoutes, to.path))

  if (to.path === '/') {
    store.dispatch('clearCurrentEstabelecimento')
      .then(() => { delete localStorage.estabelecimento })
  }
  // ----------
  if (!isAuthRoute(to) && !isLogged()) {
    if (auth.loggedIn()) { // O usuário está logado (localStorage cache) mas as informações não estão no store
      store.dispatch('attemptLogin', {
        login: ':)',
        senha: 'hacker'
      })
        .then(() => {
          if (EstabelecimentoService.hasEstabelecimento()) { // O usuário já selecionou um estabelecimento (localStorage cache) mas as informações não estão no store
            store.dispatch('setCurrentEstabelecimento', JSON.parse(localStorage.estabelecimento))
              .then(() => {
                next()
              })
          } else {
            next()
          }
        })
    } else if (!includes(publicRoutes, to.path)) {
      next({
        path: '/auth',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
}
