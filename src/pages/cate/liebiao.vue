<template>
  <div>
    <div class="ding">
      <p @click="pai()">新品</p>
      <p @click="xiao()">销量</p>
      <p @click="gaojia()" v-show="!fs">价格↑</p>
       <p @click="dijia()" v-show="flag"> 价格↓</p>
      <p @click="huan()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-more-copy" />
        </svg>
      </p>
    </div>
 
    <div class="box" v-show="!ss">
      <div v-for="(item,index) in info" :key="index" class="q1">
      <router-link to="/xiangqing">     <p><img v-lazy="item.img" alt=""></p> </router-link>
          <p class="ass">{{ item.title }}</p>
          <p class="q2"> ￥{{ item.price }} <span><jiaruCom></jiaruCom></span>   </p>
      </div>
      
    </div>

    <div class="box1" v-show="ff">
      <div v-for="(item,index) in info" :key="index" class="q1s">
        <router-link to="/xiangqing">  <p class="q4s"><img v-lazy="item.img" alt=""></p></router-link>
          <div class="q3s">
             <p class="qqs">{{ item.title }}</p>
             <div class="q2s"> ￥{{ item.price }}   <p><jiaruCom></jiaruCom></p>  </div>
          </div>
          
      </div>
      
    </div>
   


    <router-view></router-view>
  </div>
</template>

<script>
import jiaruCom from './jiaru'
export default {
  components: {
    jiaruCom
  },
  name: "Liebiao",
  data() {
    return {
      info: [],
      flag:false,
      fs:false,
      ff:false,
      ss:false
    };
  },
  methods: {

    pai(){
     this.info.sort((a, b) => b.id - a.id)
    },
    xiao(){
      this.info.sort((a,b)=> a.id - b.id)
    },
    gaojia(){
      this.info.sort((a,b)=> b.price - a.price)
      this.flag = !this.flag
      this.fs = !this.fs

    },
    dijia(){
      this.info.sort((a,b)=> a.price - b.price)
      this.flag = !this.flag
      this.fs = !this.fs
    },
    huan(){
      this.ff = !this.ff
      this.ss = !this.ss
    },
 
  },
  created() {
    this.$http.get("http://www.abs.com/list").then(res => {
      console.log(res.data.list);
      this.info = res.data.list;
    });
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}
.qqs{
  margin-top: .5rem;

}

.q2s{
  margin-top: 1.6rem;
  color: red;
  display: flex;
  justify-content: space-between;
}

.q2s p{
  margin-right: .4rem;
}
img{
   width: 1.62rem;       
  /* height: 2.64rem; */
}
.q1s{
  display: flex;
  height: 3rem;
border-bottom: 1px solid gray;
}
.q4s{
  width: 40%;
  

}
.q4s>img{
  margin-left: .6rem;
  margin-top: .6rem;
}
.q3s{
  width: 60%;
  margin-left: .4rem;
}
.box1{
  width: 100%;

}
.qq>.q2{
  width: 60%;
}
.pai{
  display: none;

}
.q2{
  color: red;
  display: flex;
  justify-content: space-between;
}
.q2 span{
  margin-right: .3rem;
  margin-top: .1rem;
}
.q1{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
.q1 img{
  width: 1.62rem;
  /* height: 2.64rem; */
  margin-left: 0.6rem;
}
.box{
  width: 100%;
  display: flex;
  flex-wrap: wrap;


}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: .4rem;
}
.ding{
  display: flex;
  height: .9rem;
 justify-content: center;
  align-items: center;
}
.ding>p{
  width: 25%;
  text-align: center;
  line-height: .9rem;
  color: gray;
  font-size: .3rem;
 
}
</style>