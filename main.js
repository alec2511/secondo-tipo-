import {createApp} from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'

const router =createRouter({
    history : createWebHistory(),
    routes:[
    {path:'/', name:'Home',component:Home}
    ]
})

createApp(App)
.mount('#app ')
.use(router)
