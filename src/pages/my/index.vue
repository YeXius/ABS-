<template>
    <div id="item">
        <headerCom :title="title"></headerCom>
        <div class="content">
            我的内容  
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
        title:""
      }
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

</style>