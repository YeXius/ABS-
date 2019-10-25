import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//加载组件
const homeCom=()=>import('../pages/home')
const cateCom=()=>import('../pages/cate')
const tuijianCom=()=>import('../pages/cate/tuijian.vue')
const liebiaoCom=()=>import('../pages/cate/liebiao.vue')
const xiangqingCom=()=>import('../pages/cate/xiangqing.vue')
const cartCom=()=>import('../pages/cart')
const myCom=()=>import('../pages/my')

//配置路由
const routes=[
    {path:'/',redirect:"/home"},
    {path:'/home',component:homeCom,meta:{title:"ABS家居"}},
    {
        path:'/liebiao',
        component:liebiaoCom,
       
    },
    {
        path:'/xiangqing',
        component:xiangqingCom
    },
    {path:'/cate',component:cateCom,meta:{title:"分类"},
   
        children:[
            {
                path:'',
                component:tuijianCom,
                   
            },
           
        ]
    },
    {path:'/cart',component:cartCom,meta:{title:"购物车"}},
    {path:'/my',component:myCom,meta:{title:"我"}},
]

//实例化
const router=new VueRouter({
    routes,
    linkActiveClass:"active"
})

//导出router
export default router;