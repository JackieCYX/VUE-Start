import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 创建一个路由对象
const router = new VueRouter({
    // 注意：一旦采用了 history 模式，地址栏就没有 #，需要后台配置访问规则
    mode: 'history',
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home },
        { path: '/search/:words?', component: Search },
        { path: '*', component: NotFound}
    ]
})

export default router