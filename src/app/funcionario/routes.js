export default [
  {
    path: '/funcionarios',
    component: () => import('src/app/layouts/default'),
    redirect: { name: 'funcionario.lista' },
    children: [
      {
        path: 'cadastro',
        name: 'funcionario.cadastro',
        component: () => import('src/app/funcionario/CadastroFuncionario')
      },
      {
        path: '/',
        name: 'funcionario.lista',
        component: () => import('src/app/funcionario/ListaFuncionarios')
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('src/app/main/404')
  }
]
