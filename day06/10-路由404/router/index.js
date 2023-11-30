import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 创建一个路由对象
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home },
        { path: '/search/:words?', component: Search },
        { path: '*', component: NotFound}
    ]
})

export default router