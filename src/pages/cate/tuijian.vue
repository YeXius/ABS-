<template>

    <div class="rightt">
        <div>
            <h2 class="tou">箱包</h2>
        </div>
        <div class="right">
                
            <div v-for="(item,index) in foot" :key="index" class="right-a1">
                    <router-link to="/liebiao"> <p><img :src="item.img" alt=""></p> </router-link>
                  <p> {{ item.txt }}</p> 
            </div>
        </div>

        <div>
            <h2 class="tou">床上用品</h2>
        </div>
        <div class="right">
                
            <div v-for="(item,index) in foot" :key="index" class="right-a1">
                   <router-link to="/liebiao">  <p><img :src="item.img1" alt=""></p> </router-link>
                  <p> {{ item.txt1 }}</p> 
            </div>
        </div>

        <div>
            <h2 class="tou">清洁扫除</h2>
        </div>
        <div class="right">
                
            <div v-for="(item,index) in foot" :key="index" class="right-a1">
                 <router-link to="/liebiao">     <p><img :src="item.img2" alt=""></p> </router-link>
                  <p> {{ item.txt2 }}</p> 
            </div>
        </div>

        <router-view></router-view>
        
    </div>    
</template>

<script>
// import Axios from 'axios'
export default {
    name:'Tuijian',
    data () {
        return {
            foot:[],
        }
    },

    created() {
        this.$http.get('./json/index1.json').then((res)=>{
            // console.log(res.data.tuijian)
            this.foot = res.data.tuijian
        })
    },
}
</script>

<style>
.tou{
    font-size: .4rem;
    margin-left: .3rem;
}
.rightt{
    width: 100%;
    display: flex;
    flex-direction: column;
        box-sizing: border-box;
     

}
    .right{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-sizing: border-box;
        
    }
    .right-a1{

        width: 30%;
        display: flex;
        flex-direction: column;
        /* justify-content: space-around; */
        align-items: center;
        justify-content: center;
        box-sizing: border-box;




    }
    .right-a1 img{
        width: 1.3rem;
        margin: .2rem 0;

    }
</style>