import * as config from '../../../utils/config'
import http from '../../../utils/services/http'

export default {
  cadastrar (e) {
    return http.post(config.baseUrl + '/api/estabelecimento/new', JSON.stringify(e))
      .then(result => Promise.resolve(result))
      .catch(error => Promise.reject(error))
  },
  getEstabelecimentosByUser (id) {
    return http.get(config.baseUrl + '/api/estabelecimento/usuario/' + id)
      .then(result => Promise.resolve(result))
      .catch(error => Promise.reject(error))
  },
  hasEstabelecimento () {
    return !!localStorage.estabelecimento
  }
}
