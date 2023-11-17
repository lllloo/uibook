var routes = [
  {
    path: '/',
    redirect: '/image-list'
  },
  {
    path: '/image-list',
    component: () => import('@/components/ImageList.vue')
  },
  {
    path: '/image/:id',
    component: () => import('@/components/ImageBox.vue')
  }
]

export default routes
