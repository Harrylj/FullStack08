import  Vue from 'vue';
import VueRouter from 'vue-router';
// 定义路由组件
import Foo  from './views/Foo.vue';
import Bar from './views/Bar.vue'
// import HelloWorld from './components/HelloWorld.vue';

// 安装路由到vue
Vue.use(VueRouter)

// 定义路由,卧槽！！！！！这里必须要叫routes，不然得写 routes:routers
const routers = [
    {
        path: '/',
        // 重定向为指定位置
        redirect: '/foo'
    },
    {
        path: '/foo',
        name:'foo',
        component: Foo
    },
    {
        path: '/bar',
        name: 'bar',
        component: Bar
    }
]

// 创建 router 实例
export default new VueRouter({
    mode: 'history',
    routes: routers
})


