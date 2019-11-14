
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/MainPage.vue')
      },
    ]
  },

  {
    path: '/details',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '/details/:user',
        name: 'github.details',
        component: () => import('pages/UserDetailsPage.vue')
      },
    ]
  },

  {
    path: '/notfound',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/UserNotFound.vue'),
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
