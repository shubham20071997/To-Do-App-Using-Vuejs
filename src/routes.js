import Home from './components/Home.vue' 
import SignUp from './components/SignUp.vue' 
import {createRouter,createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import Create from './components/Create.vue'
import List from './components/List.vue'
import Landing from './components/Landing.vue'
import Update from './components/Update.vue'
import Dashboard from './components/Dashboard.vue'

const routes= [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Create',
        component:Create,
        path:'/create-task'
    },
    {
        name:'List',
        component:List,
        path:'/task-lists'
    },
    {
        name:'Landing',
        component:Landing,
        path:'/landing'
    },
    {
        name:'Update',
        component:Update,
        path:'/update'
    },
    {
        name:'Dashboard',
        component:Dashboard,
        path:'/dashboard'
    },

]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router