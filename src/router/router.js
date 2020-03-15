import Home from '@/views/home.vue'

export default [
    {
        path: '/',
        name: 'home',//命名
        alias: '/home_page',//别名
        component: Home,
        props:route=>({
            food:route.query.food
        })
    },
    {
        path: '/about',
        name: 'about', //命名路由--- 组件中调用 :to="{name : 'about'}"
        //which is lazy-loaded when the route is visited
        component: () => import('@/views/about.vue'),
        props:{
            food:"apple"
        }
    },
    //动态路由
    {
        path: '/argu/:name',
        name:'argu',
        component: () => import('@/views/argu.vue'),
        props:true
    },
    //嵌套路由
    {
        path: '/parent',
        name:'parent',
        component: () => import('@/views/parent.vue'),
        children: [
            {
                path: 'child', //不需要'/'前缀
                component: () => import('@/views/child.vue')
            }
        ]
    },
    //加载多个组件
    {
        path: '/named_view',
        components: {
            default: () => import('@/views/child.vue'),
            email: () => import('@/views/email.vue'),
            tel: () => import('@/views/tel.vue'),
        }
    },
    //重定向
    {
        path: '/main',       
        //1.
        // redirect:{
        //     name:'home'
        // }

        //2.
        // redirect:'/'

        //3.https://blog.csdn.net/qq_41614928/article/details/102787344
        // redirect:to=>'/'
        // redirect:to=>{
        //     return '/'
        // }
        // redirect:to=>{
        //     return{
        //         name:'home'
        //     }
        // }
    },
    {
        path:'*',
        component:()=>import('@/views/404.vue')
    }
]