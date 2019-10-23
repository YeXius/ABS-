<template>
    <div id="item">
        <headerCom :title="title"></headerCom>
              <div class="content">
                  <ul class="left">
                    <router-link class="aaa" tag='li' v-for="item in arr" :key="item.id"
                    :to="`/cate?id=${item.id}`"
                    >
                        {{ item.txt }}
                    </router-link>
                  </ul>

                  <div class="rt">
                      <router-view></router-view>
                  </div>
                  77777777777777777777777777

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
                {"txt":"推荐","id":"tuijian"},
                {"txt":"出行","id":"chuxing"},
                {"txt":"睡眠","id":"shuimian"},
                {"txt":"厨具","id":"chufang"},
                {"txt":"美护","id":"meihu"},
                {"txt":"休闲","id":"xiuxian"},
                {"txt":"儿童","id":"ertong"},
                {"txt":"家务","id":"jiawu"},
                {"txt":"空间","id":"kongjian"}
            ]
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

<style>
.content{
  display:flex;
        box-sizing: border-box;

}
  ul{
    width: 20%;
    border-top: 1px solid gray;
    border-right: 1px solid gray;
    border-left: 1px solid gray;

  }
  ul .aaa{
    width: 100%;
    height: .9rem;
    border-bottom: 1px solid gray;
    text-align: center;
    line-height: .9rem;
  }

  .rt{
    width: 80%;
  }
</style>