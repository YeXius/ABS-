<template>
    <div>
        <div class='header'>
            <router-link to="/home" tag="svg" class="icon3" aria-hidden="true">
                <use xlink:href="#icon-icon-test9"></use>
            </router-link>
            <h4>新品</h4>
        </div>
        <div id="tou2">
            <span>新品</span>
            <span>销量</span>
            <span @click="jia">
                价格
                <small v-show="!tou">↑</small>
                <small v-show="tou">↓</small>    
            </span>
            <span class="span" @click="bian">
                <svg class="ico" aria-hidden="true" v-if="!gao">
                    <use xlink:href="#icon-icon-"></use>
                </svg>
                <svg class="ico" aria-hidden="true" v-else>
                    <use xlink:href="#icon-bianji"></use>
                </svg>
            </span>
        </div>
        <div id="shang" v-show="!gao">
            <ul class="ul">
                <li v-for="(v,i) in list" :key="i">
                <div>
                    <img :src="v.img" alt="">
                    <p>{{v.title}}</p>
                </div>
                <div>
                    <span>￥{{v.price}}</span>
                    <button @click="add(v)">+</button>
                </div>
                </li> 
            </ul>
        </div>
        <div id="shang2" v-show="gao">
            <ul class="ul">
                <li v-for="(v,i) in list" :key="i">
                    <div>
                        <img :src="v.img" alt="">
                    </div>
                    <div>
                        <p>{{v.title}}</p>
                        <div>
                            <span>￥{{v.price}}</span>
                            <button @click="add(v)">+</button>
                        </div>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="ad" v-show="flag">
            <p>加入成功</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                list:[],
                tou: false,
                gao: false,
                flag:false
            }
        },
        methods: {
            add(v){
                this.flag = true
            },
            jia(){
                this.tou =! this.tou
                if(this.tou){
                    this.list.sort(this.sortMethods1('price'))
                }else{
                    this.list.sort(this.sortMethods2('price'))
                }
            },
            sortMethods1(s){
                return function(a,b){
                    var val1 = a[s]
                    var val2 = b[s]
                    return val2 - val1
                }
            },
            sortMethods2(s){
                return function(a,b){
                    var val1 = a[s]
                    var val2 = b[s]
                    return val1 - val2
                }
            },
            bian(){
                this.gao =! this.gao

            }
        },
        mounted() {
            axios.get(`http://www.abs.com/list`).then((res)=>{
                // console.log(res.data.list)
                this.list = res.data.list
            })
        },      
    }
</script>

<style scoped>
.ad{
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 45%;
    left: 38%;
    /* margin: 0rem auto; */
}
.ad p{ 
    line-height: 2.2rem;
    color: white;
    font-size: 0.25rem;
    text-align: center;
}
#shang2 .ul{
  height: 100%;
  width: 100%;
  /* display: flex; */
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
}
#shang2 ul li{
  width: 100%;
  height: 2.5rem;
  /* margin-top: 0.1rem; */ 
  border-bottom: 1px solid rgb(233, 233, 233);
  display: flex;
}
#shang2 ul li div:nth-child(1){
    width: 35%;
    height: 100%;
    /* background: darkblue; */
}
#shang2 ul li div:nth-child(1) img{
    width: 90%;
    height: 90%;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
}
#shang2 ul li div:nth-child(2){
    width: 65%;
    height: 100%;
    /* background: darkgray; */
}
#shang2 ul li div:nth-child(2) div{
    margin-top: 1.2rem;
}
#shang2 ul li div:nth-child(2) div span{
    color: rgb(170, 19, 19);
}
#shang2 ul li div:nth-child(2) div button{
    width: 0.4rem;
    height: 0.4rem;
    border: 0.01rem solid blue;
    border-radius: 50%;
    font-size: 0.25rem;
    color: blue;
    float: right;
    /* margin-top: 0.2rem; */
    /* margin-right: 0.2rem; */
    background: white;
    /* margin-left: 1rem; */
    /* padding-left: 1rem; */
}
#shang2 ul li div:nth-child(2) p{
    font-size: 0.29rem;
    margin-top: 0.3rem;
}
#tou2{
    width: 100%;
    height: 0.5rem;
    background: rgb(233, 233, 233);
    display: flex;
}
#tou2 span{
    width: 15%;
    height: 0.5rem;
    font-size: 0.25rem;
    line-height: 0.5rem;
    text-align: center;
    color: rgb(134, 133, 133);
    margin-left: 0.7rem;
}
#tou2 span:hover{
    color: red;
}
#tou2 .span{
    border-left: 0.03rem solid black;
}
#tou2 .ico{
    width: 0.44rem;
    height: 0.45rem;
    color: black;
}
    .header {
        width: 100%;
        height: 1rem;
        /* border-bottom: 1px solid #000; */
        box-sizing: border-box;
        padding-left: .34rem;
        display:flex;
        align-items: center;
        border-bottom: 0.01rem solid rgb(224, 224, 224);
    }
    .header .icon3{
        width: 0.5rem;
        height: 0.5rem;
    }
    .header h4{
        font-family: "楷体";
        font-size: .4rem;
        margin-left: 0.1rem;
    }
#shang .ul{
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
#shang ul li{
  width: 48%;
  height: 5rem;
  /* margin-top: 0.1rem; */
}
#shang ul li div:nth-child(2){
  width: 100%;
  height: 15%;
}
#shang ul li div:nth-child(2) span{
  color: rgb(165, 6, 6);
  font-size: 0.28rem;
  /* line-height: 0.8rem; */
  margin-left: 0.3rem;
}
#shang ul li div:nth-child(2) button{
  width: 0.4rem;
  height: 0.4rem;
  border: 0.01rem solid blue;
  border-radius: 50%;
  font-size: 0.25rem;
  color: blue;
  float: right;
  /* margin-top: 0.2rem; */
  margin-right: 0.2rem;
  background: white;
}
#shang ul li div:nth-child(1){
  width: 100%;
  height: 85%;
  /* background: darkgray; */
}
#shang ul li div:nth-child(1) img{
  width: 60%;
  height: 50%;
  margin: 0rem auto;
  margin-left: 0.8rem;
  margin-top: 0.8rem;
}
#shang ul li div:nth-child(1) p{
  font-size: 0.27rem;
}
#shang p:nth-child(2){
  width: 90%;
  height: 0.6rem;
  display: block;
  /* background: darkcyan; */
  padding-left: 0.3rem;
  line-height: 0.6rem;
  font-size: 0.35rem;
}
#shang p:nth-child(1){
  width: 17%;
  /* height: .rem; */
  border: 2px solid red;
  text-align: center;
  margin-left: 0.3rem;
}
</style>