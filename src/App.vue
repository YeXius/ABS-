<template>
  <div id="app">
    <router-view></router-view>
    <!-- <ul>
      <li v-for='(item,index) in arr' :key="index">
        <img :src="item" alt="">
      </li>
    </ul> -->
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  created(){
    this.getData();
  },
  data(){
    return {
      arr:[]
    }
  },
  methods:{
    getData(){
      // console.log(this.$http)
      this.$http.get('http://www.abs.com/home')
        .then(res=>{
          // console.log(res)
          // this.arr=res.data.lunbo
        })
    }
  }
}
</script>

<style>

</style>

