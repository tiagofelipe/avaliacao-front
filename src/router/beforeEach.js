import store from '../store'
import { includes } from 'lodash'
import auth from '../domain/auth/services/auth'

const isAuthRoute = route => route.path.indexOf('/auth') !== -1
const isLogged = () => store.getters.isLogged

// insert public routes here
const publicRoutes = []

export default (to, from, next) => {
  // --------- only for debugging
  console.log('não é auth', !isAuthRoute(to), to.path)
  console.log('não está logado', !isLogged())
  console.log('não é rota pública', !includes(publicRoutes, to.path))
  // ----------
  if (!isAuthRoute(to) && !isLogged()) {
    if (auth.loggedIn()) { // O usuário está logado (localStorage cache) mas as informações não estão no store
      store.dispatch('attemptLogin', {
        login: ':)',
        senha: 'hacker'
      })
        .then(() => {
          next()
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
