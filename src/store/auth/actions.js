import auth from '../../domain/auth/services/auth'

export const attemptLogin = (context, payload) => {
  return auth.login(payload.username, payload.password)
    .then(data => {
      context.commit('SET_TOKEN', data.token)
      context.commit('SET_USER', data.user)
      return Promise.resolve()
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

export const logout = (context, payload) => {
  context.commit('SET_TOKEN', '')
  context.commit('SET_USER', {})
  context.commit('SET_ESTABELECIMENTO', {})
  return Promise.resolve()
}

export const atualizaCurrentUser = (context, payload) => {
  localStorage.user = JSON.stringify(payload)
  context.commit('SET_USER', payload)
}
