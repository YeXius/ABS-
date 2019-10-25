<template>
    <div id="item">
        <headerCom :title="title"></headerCom>
              <div class="content">
                  <ul class="left">
                    <router-link @click="bian()" class="bb"  tag='li' v-for="(item,index) in arr" :key="item.id"
                    :to="`/cate?id=${item.id}`"
                    >
                        <p  @click='checkred(item,index)' class="aaa" :class='{bbb:item.f}'>{{ item.txt }}</p> 
                    </router-link>
                  </ul>

                  <div class="rt">
                      <router-view></router-view>
                  </div>

              </div>
        <footerCom></footerCom>
    </div>
</template>

<script>
import footerCom from '../../components/footer'
import headerCom from '../../components/header'
export default {
  components: {
    footerCom,
    headerCom
  },
  data(){
      return {
        title:"",
        arr:[
                {"txt":"推荐","id":"tuijian" ,f:false},
                {"txt":"出行","id":"chuxing" ,f:false},
                {"txt":"睡眠","id":"shuimian" ,f:false},
                {"txt":"厨具","id":"chufang" ,f:false},
                {"txt":"美护","id":"meihu" ,f:false},
                {"txt":"休闲","id":"xiuxian" ,f:false},
                {"txt":"儿童","id":"ertong" ,f:false},
                {"txt":"家务","id":"jiawu" ,f:false},
                {"txt":"空间","id":"kongjian" ,f:false}
            ]
      }
  },
  methods: {
          checkred(item,index){
            // item.f=!item.f
          }
  },
  
  // created() {
  //   this.$http.get('./json/index1.json').then((res)=>{
  //       console.log(res.data.biaoti)
  //       this.list= res.data.biaoti

  //   })
  // },
  beforeRouteEnter (to, from, next) {
        next(vm=>{
            // console.log(to)
            vm.title=to.meta.title
        })
  }
}
</script>

<style scoped>
.bb{
  /* border: 1px solid gray; */
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  /* border-right: none; */
}

.content{
  display:flex;
        box-sizing: border-box;

}
  ul{
    width: 20%;
  height: 100%;

    border-top: 1px solid gray;
    /* border-right: 1px solid gray; */
    border-left: 1px solid gray;
  /* border-right: none; */

  }
  ul .aaa{
    width: 100%;
    height: .9rem;
    border-bottom: 1px solid gray;
    text-align: center;
    line-height: .9rem;
  }
  ul .bbb{
    width: 100%;
    height: .9rem;
    border-bottom: 1px solid gray;
    text-align: center;
    line-height: .9rem;
    /* color: red; */
  }
 /* ul .aaa:hover
  {
    color: red
  } */
/* ul>.active{
  color: red
} */
  .rt{
    width: 80%;
  }
  .router-link-exact-active {
    color: red;
    border-top: 2px solid red;
    border-right: none;
  }
</style>