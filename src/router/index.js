import VueRouter from 'vue-router'
import Home from '../Pages/Home.vue'

export default new VueRouter({
    routes:[{
        path: '/',
        component: Home
    }]
})