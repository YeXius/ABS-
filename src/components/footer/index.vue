<template>
    <div class="footer">
        <ul>
            <router-link tag='li' v-for="(item,index) in arr" :key="index" 
            :to="item.url">
                  <svg class="icon" aria-hidden="true">
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
    }
    .footer ul{
        display:flex;
        width: 100%;
        height: 100%;
    }
    .footer ul>li{
        flex:1;
        /* border: 1px solid #000; */
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding:.16rem 0;
    }
    .footer ul>li .icon{
        font-size: .42rem;
    }
    .footer .active{
        color:red;
    }
</style>