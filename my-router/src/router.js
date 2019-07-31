import  Vue from 'vue';
import VueRouter from 'vue-router';
// 定义路由组件
import Foo  from './views/Foo.vue';
import Bar from './views/Bar.vue';
import Test from './views/Test.vue';
import Single from './views/Single.vue';
import FooMore from './views/FooMore.vue';
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
        path: '/single',
        component: Single
    },
    {
        path: '/foo',
        name:'foo',
        // 嵌套命名视图
        components: {
            default: Foo,
            foomore: FooMore
        },
    },
    {
        path: '/bar/:id',
        // 使组件页接收props参数，获取this.$route的数据
        props: true,
        component: Bar,
        // 嵌套路由
        children: [
            {
                path: 'test',
                component: Test
            }
        ]
    }
]

// 创建 router 实例
export default new VueRouter({
    mode: 'history',
    routes: routers
})


