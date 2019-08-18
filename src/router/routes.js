// route level code-splitting
// this generates a separate chunk ([chunk-hash].[hash].js) for this route
// which is lazy-loaded when the route is visited.
const lazyLoad = view => () => import(`@/views/${view}.vue`)
// const lazyLoad = view => () => import(/* webpackChunkName: "[request]" */ `@/views/${view}.vue`)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('Home')
  },
  {
    path: '/about',
    name: 'about',
    component: lazyLoad('About')
  }
]
