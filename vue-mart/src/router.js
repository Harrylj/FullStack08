import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      //  认证，需要登录才可以看到这个
      meta: {
        auth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})




// 路由守卫,验证是否登录
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要登陆
    const token = localStorage.getItem("token")
    if (token) {
      next();
    } 
    else {
      next({
        path: '/login',
        query: { redirect: to.path}
      })
    }
  } 
  else { // 不需要登录验证
    next()
  }
})

export default router;