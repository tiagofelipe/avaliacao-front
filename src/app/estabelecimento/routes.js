export default [
  {
    path: '/estabelecimento',
    component: () => import('src/app/layouts/default'),
    // redirect: { name: 'estabelecimento.lista' },
    children: [
      {
        path: '/cadastro',
        name: 'estabelecimento.cadastro',
        component: () => import('src/app/estabelecimento/CadastroEstabelecimento')
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('src/app/pages/404')
  }
]
