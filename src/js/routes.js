import ImageList from '@/pages/ImageList.vue'
import ImageBox from '@/pages/ImageBox.vue'

var routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/image-list',
    component: ImageList
  },
  {
    path: '/image/:id',
    component: ImageBox
  }
]

export default routes
