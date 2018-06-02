import * as config from '../../../utils/config'
import http from '../../../utils/services/http'

export default {
  cadastrar (e) {
    return http.post(config.baseUrl + '/api/funcionario/new', JSON.stringify(e))
      .then(result => Promise.resolve(result))
      .catch(error => Promise.reject(error))
  },
  uploadFile (file, id) {
    return http.post(config.baseUrl + '/api/funcionario/' + id + '/upload', file, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(result => Promise.resolve(result))
      .catch(error => Promise.reject(error))
  }
}
