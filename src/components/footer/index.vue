<template>
    <div class="footer">
        <ul>
            <router-link tag='li' v-for="(item,index) in arr" :key="index" 
            :to="item.url">
                  <svg class="icon1" aria-hidden="true">
                    <use :xlink:href="`#icon-${item.imgs}`"></use>
                  </svg>
                 <p>
                     {{item.name}}
                 </p>
            </router-link>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {
            arr:[
                {id:1,name:'首页',url:'/home',imgs:'shouye'},
                {id:2,name:'分类',url:'/cate',imgs:'fenlei'},
                {id:3,name:'购物车',url:'/cart',imgs:'gouwuche'},
                {id:4,name:'我的',url:'/my',imgs:'wode'}
            ]
        }
    }
}
</script>

<style>
    .footer{
        width: 100%;
        height: 1.16rem;
        border-top: 1px solid #E0E0E0;
        background: #F0F4F3;
        position: fixed;
        bottom: 0rem;
    }
    .footer ul{
        display:flex;
        width: 100%;
        height: 100%;
    }
    .footer ul>li{
        width: 25%;
        height: 100%;
    }
    .footer ul li p{
        display: block;
        font-size: 0.26rem;
        padding-top: 0.2rem;
        text-align: center;
    }
    .footer ul>li .icon1{
        width: 0.4rem;
        height: 0.4rem;
        display: block;
        margin: 0rem auto;
        padding-top: 0.2rem;
    }
    .footer .active{
        color:red !important;
    }
</style>