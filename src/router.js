import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = resolve => require(['@/components/pages/Index'], resolve)

let router = new Router({
    routes: [
        {
           path: '/',
           name: '首页',
           component: Index
        }
    ]
})

export default router;