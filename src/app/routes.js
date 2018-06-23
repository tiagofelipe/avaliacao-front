import { default as auth } from './auth/routes'
import { default as estabelecimento } from './estabelecimento/routes'
import { default as funcionario } from './funcionario/routes'
import { default as dashboard } from './dashboard/routes'

export default [ ...auth, ...estabelecimento, ...funcionario, ...dashboard ]
