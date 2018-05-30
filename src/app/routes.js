import { default as auth } from './auth/routes'
import { default as estabelecimento } from './estabelecimento/routes'

export default [ ...auth, ...estabelecimento ]
