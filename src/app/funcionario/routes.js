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
      },
      {
        path: 'listar',
        name: 'funcionario.lista',
        component: () => import('src/app/funcionario/ListaFuncionarios')
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('src/app/dashboard/404')
  }
]
