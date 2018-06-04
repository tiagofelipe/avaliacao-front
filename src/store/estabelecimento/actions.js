export const setCurrentEstabelecimento = (context, payload) => {
  localStorage.estabelecimento = JSON.stringify(payload)
  context.commit('SET_ESTABELECIMENTO', payload)
  return Promise.resolve()
}

export const clearCurrentEstabelecimento = (context, payload) => {
  context.commit('SET_ESTABELECIMENTO', {})
  return Promise.resolve()
}

export const atualizaCurrentEstabelecimento = (context, payload) => {
  context.commit('SET_ESTABELECIMENTO', payload)
  return Promise.resolve()
}
