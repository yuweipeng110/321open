import Vue from 'vue'
import Router from 'vue-router'
import { Message } from 'element-ui';

Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/api',
    component: () => import('@/views/api'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页' }
    }]
  },
  {
    path: '/shotResources',
    component: Layout,
    children: [
      {
        path: 'shot',
        component: () => import('@/views/shotResources/index'),
        name: 'shotResourcesindex',
        meta: { title: '拍摄' }
      }
    ]
  },
  {
    path: '/shotDetails',
    component: Layout,
    children: [
      {
        path: 'details',
        component: () => import('@/views/shotResources/details'),
        name: 'shotResourcesdetails',
        meta: { title: '拍摄' }
      }
    ]
  },
  {
    path: '/shotForm',
    component: Layout,
    children: [
      {
        path: 'form',
        component: () => import('@/views/shotResources/form'),
        name: 'shotResourcesform',
        meta: { title: '拍摄' }
      }
    ]
  },
  {
    path: '/demand',
    component: Layout,
    children: [
      {
        path: 'demand',
        component: () => import('@/views/demand/index'),
        name: 'demandindex',
        meta: { title: '需求' }
      }
    ]
  },
  {
    path: '/demand',
    component: Layout,
    children: [
      {
        path: 'details',
        component: () => import('@/views/demand/details'),
        name: 'demanddetails',
        meta: { title: '需求' }
      }
    ]
  },
  {
    path: '/goodOutreach',
    component: Layout,
    children: [
      {
        path: 'goodOutreach',
        component: () => import('@/views/goodOutreach/index'),
        name: 'goodOutreachindex',
        meta: { title: '外联' }
      }
    ]
  },
  {
    path: '/goodOutreach',
    component: Layout,
    children: [
      {
        path: 'details',
        component: () => import('@/views/goodOutreach/details'),
        name: 'goodOutreachdetails',
        meta: { title: '外联' }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    children: [
      {
        path: 'article/:id(\\d+)',
        component: () => import('@/views/article/index'),
        name: 'articleindex',
        meta: { title: '文章' }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    children: [
      {
        path: 'details',
        component: () => import('@/views/article/details'),
        name: 'articledetails',
        meta: { title: '文章' }
      }
    ]
  },
  {
    path: '/my',
    component: Layout,
    children: [
      {
        path: 'my',
        component: () => import('@/views/my/index'),
        name: 'PersonalCenter',
        meta: { title: '个人中心' }
      }
    ]
  },
  {
    path: '/vedioList',
    component: Layout,
    children: [
      {
        path: 'vedioList',
        component: () => import('@/views/vedioList/index'),
        name: 'vedioList',
        meta: { title: '视频列表' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from, next) => {
  // console.log( this )
  if (to.name === "PersonalCenter") {
    const token = localStorage.getItem("id");
   if(token){
    next();
   }else{
    // next();
    Message({
      message: '请先登录！',
      type: 'warning'
    });
   }

  } else {
    next();
  }
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
