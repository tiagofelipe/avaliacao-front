import http from '../../../utils/services/http'
import router from '../../../router'
import * as config from '../../../utils/config'
import store from '../../../store'

export default {
  login (login, senha) {
    if (localStorage.token) { // token já existe na memória
      http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token
      return Promise.resolve({token: localStorage.token, user: JSON.parse(localStorage.user)})
    }

    return postLogin(login, senha)
      .then((result) => {
        localStorage.token = result.token
        localStorage.user = JSON.stringify(result.user)
        http.defaults.headers.common['Authorization'] = 'Bearer ' + result.token
        return Promise.resolve(result)
      })
      .catch((error) => Promise.reject(error))
  },

  logout (callback) {
    delete localStorage.token
    delete localStorage.user
    delete localStorage.estabelecimento
    delete http.defaults.headers.common['Authorization']
    this.onChange(false)
    // Clear store in vuex
    store.dispatch('logout').then(() => {
      if (callback) callback()
    })
  },

  loggedIn () {
    return !!localStorage.token
  },

  onChange () {
  }
}

const postLogin = (login, senha) => {
  return http.post(config.baseUrl + '/api/auth', 'user=' + login + '&pass=' + senha)
    .then(response => Promise.resolve(response.data))
    .catch(({response}) => {
      return Promise.reject(response.data)
    })
}

http.interceptors.response.use(response => {
  return response
}, function (error) {
  if (error.response.status === 403) {
    console.log(error.response)
    window.alert('Você não tem autorização para acessar essa função')
    // return Promise.reject(error.response)
    router.push('/') // TODO: TRATAR ERROS DE PERMISSÃO
  }
  if (error.response.status === 401) {
    console.log('TOKEN EXPIRADO!')
    router.push('/logout')
  }
  return Promise.reject(error)
})
