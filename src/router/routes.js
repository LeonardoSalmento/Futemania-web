import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/SectionBanner'
import News from '../components/SectionNews'
import Detail from '../components/SectionNewsDetail'
import Component404 from '../components/404'

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass : "link-active",
    routes: [{
        path: '/',
        component: Home
    },{
        path: '/news',
        component: News
    },{
        path: '/news/:idNews',
        name: 'newsDetail',
        component: Detail
    },{
        path: '*',
        component: Component404
    }]
})