import auth from '../domain/auth/services/auth'
import { default as app } from '../app'

const root = [
  {
    path: '/',
    component: () => import('src/app/layouts/default'),
    children: [
      { path: '', component: () => import('src/app/pages/index') }
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
    component: () => import('src/app/pages/404')
  }
]

export default [ ...root, ...app ]
