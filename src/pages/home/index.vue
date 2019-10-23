<template>
    <div id="item">
        <headerCom :title="title"></headerCom>
        <div id="box">
          <div id="tou">
            <img src="../../../public/imgs/images1/swiper/shou_03.png" alt="">
            <input type="text" class="input" placeholder="搜搜更多家具好物">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-test3"></use>
            </svg>
        </div>
        <div id="swiper">
          <el-carousel height="4rem" indicator-position="none">
            <el-carousel-item v-for="(v,i) in lunbo" :key="i">
              <img :src="v" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div id="img">
          <router-link tag="div" to="/ren">
              <img src="../../../public/imgs/images1/swiper/shou_07.png" alt="">
          </router-link>
          <div>
            <div class="div1">
              <router-link to="/xin">
              <img src="../../../public/imgs/images1/swiper/shou_09.png" alt="">
              </router-link>
            </div>
            <div class="div2">
              <img src="../../../public/imgs/images1/swiper/shou2_03.png" alt="">
            </div>
          </div>
        </div>
        <div id="shang">
          <div>
            <p></p>
            <p>商品列表</p>
          </div>
          <ul class="ul">
            <li v-for="(v,i) in list" :key="i">
              <div>
                  <img :src="v.img" alt="">
                  <p>{{v.title}}</p>
              </div>
              <div>
                <span>￥{{v.price}}</span>
                <button>+</button>
              </div>
            </li> 
          </ul>
        </div>
        </div>
        <footerCom></footerCom>
    </div>
</template>

<script>
import footerCom from '../../components/footer'
import headerCom from '../../components/header'
import axios from 'axios'
export default {
  components: {
    footerCom,
    headerCom
  },
  data(){
      return {
        title:"",
        lunbo:[],
        list:[]
      }
  },
  methods: {
    tj(v){
      this.$store.commit('tj',v)
    }
  },
  mounted() {
    axios.get(`http://www.abs.com/home`).then((res)=>{
      this.lunbo = res.data.lunbo
    })
    axios.get(`http://www.abs.com/list`).then((res)=>{
      // console.log(res.data.list)
      this.list = res.data.list
    })
  },
  beforeRouteEnter (to, from, next) {
        next(vm=>{
            // console.log(to)
            vm.title=to.meta.title
        })
  }
}
</script>

<style>
#box{
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-bottom: 1.1  rem;
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
  margin-top: 0.1rem;
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
#img{
  width: 100%;
  height: 3.2rem;
  background: #f6d1d9;
  display: flex;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
#img :nth-child(1){
  flex: 1rem;
  /* background: darkcyan; */
}
#img :nth-child(1) img{
  width: 90%;
  height: 100%;
  /* margin-left: 0.2rem; */
  /* padding-left: 0.3rem; */
  float: right;
  margin-right: 0.05rem;
}
#img :nth-child(2){
  flex: 1rem;
  /* background: darkcyan; */
  /* padding-left: 0.05rem; */
  /* background: darkgray; */
}
#img :nth-child(2) .div1{
  width: 90%;
  height: 47%;
  margin-left: 0.15rem;
}
#img :nth-child(2) .div1 img{
  width: 100%;
  height: 100%;
}
#img :nth-child(2) .div2{
  width: 90%;
  height: 47%;
  margin-top: 0.15rem;
  margin-left: 0.1rem;
}
#img :nth-child(2) .div2 img{
  width: 100%;
  height: 100%;
}
#swiper{
  width: 100%;
  height: 4rem;
  /* border-bottom: 1px solid #000; */
}
#swiper img{
  width: 100%;
  height: 100%;
}
.icon{
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 1rem;
  top: 0.15rem;
}
#tou{
  width: 100%;
  height: 0.75rem;
  display: flex;
  background: white;
  position: fixed;
  top: 0.9rem;
  z-index: 100;
}
#tou img{
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.05rem;
    margin-left: 0.20rem;
}
#tou .input{
    width: 75%;
    height: 0.5rem;
    margin-top: 0.05rem;
    margin-left: 0.2rem;
    border: 0.03rem solid black;
    font-size: 0.25rem;
    padding-left: 0.55rem;
    outline: none;
}
</style>