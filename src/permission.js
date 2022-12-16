import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // 跳转页面所需的进度条
import 'nprogress/nprogress.css'

// 路由前置守卫
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启进度条
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有token  判断是否再白名单 是放行 不是 返回登录页
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done() // 关闭进度条
})
// 路由后置守卫
router.afterEach((to, from, next) => {
  NProgress.done() // 关闭进度条
})
