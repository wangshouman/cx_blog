import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import detail from '@/views/detail/detail'
import technical from '@/views/technical/technical'
import talk from '@/views/talk/talk'
import myself from '@/views/myself/myself'

// import detail from '@/views/detail'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/technical',
      name: 'technical',
      component: technical
    },
    {
      path: '/talk',
      name: 'talk',
      component: talk
    },
    {
      path: '/myself',
      name: 'myself',
      component: myself
    }
  ]
})
