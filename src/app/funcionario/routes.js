export default [
  {
    path: '/funcionario',
    component: () => import('src/app/layouts/default'),
    // redirect: { name: 'funcionario.cadastro' },
    children: [
      {
        path: 'cadastro',
        name: 'funcionario.cadastro',
        component: () => import('src/app/funcionario/CadastroFuncionario')
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('src/app/pages/404')
  }
]
