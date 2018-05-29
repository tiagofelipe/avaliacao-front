export default [
  {
    path: '/auth',
    component: () => import('src/app/layouts/default'),
    redirect: { name: 'auth' },
    children: [
      {
        path: '/',
        name: 'auth',
        component: () => import('src/app/auth/Main')
      }
    ]
  }
]
