import * as view from '../view'

export const routes = [
  {
    path: '/',
    name: '/',
    exact: true,
    view: 'isPrivate',
    component: view.Home
  },

  {
    path: '/not-found',
    name: '/not-found',
    view: 'isPublic',
    component: view.NotFound
  }
]
