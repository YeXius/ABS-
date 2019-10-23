<template>
    <div>
        <div class='header'>
            <router-link to="/home" tag="svg" class="icon3" aria-hidden="true">
                <use xlink:href="#icon-icon-test9"></use>
            </router-link>
            <h4>人气热卖</h4>
        </div>
        <div id="shang">
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
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                list:[]
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