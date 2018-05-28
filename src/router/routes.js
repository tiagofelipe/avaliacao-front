import auth from '../domain/auth/services/auth'

const root = [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
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
    component: () => import('pages/404')
  }
]

export default [ ...root ]
