import { routes as app } from '../app'
import auth from '../domain/auth/services/auth'

const root = [
  {
    path: '/',
    component: () => import('src/app/layouts/default'),
    children: [
      { path: '', name: 'index', component: () => import('src/app/main/index') }
    ]
  },
  {
    name: 'logout',
    path: '/logout',
    beforeEnter (to, from, next) {
      auth.logout(() => {
        next('/auth')
      })
    }
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('src/app/main/404')
  }
]

export default [ ...root, ...app ]
