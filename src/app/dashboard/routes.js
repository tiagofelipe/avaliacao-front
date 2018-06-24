export default [
  {
    path: '/dashboard',
    component: () => import('src/app/layouts/default'),
    redirect: 'dashboard.main',
    children: [
      {
        path: '/',
        name: 'dashboard.main',
        component: () => import('src/app/dashboard/Main')
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('src/app/main/404')
  }
]
