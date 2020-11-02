import VueRouter from 'vue-router'
import Home from '../Pages/Home.vue'
import no1 from '../components/Content/ArticleList/Articles/contents/no1.vue'

export default new VueRouter({
    routes: [{
        path: '/',
        component: Home,
    },
    {
        path: '/no1',
        component: no1
    }]
})