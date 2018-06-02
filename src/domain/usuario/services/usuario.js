import * as config from '../../../utils/config'
import http from '../../../utils/services/http'

export default {
  getEstabelecimentosNames (id) {
    return http.get(config.baseUrl + '/api/usuario/' + id + '/listEstabelecimentos')
      .then(result => Promise.resolve(result))
      .catch(error => Promise.reject(error))
  }
}
