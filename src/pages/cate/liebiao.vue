<template>
  <div>
    <div class="ding">
      <p>新品</p>
      <p>销量</p>
      <p>价格↑</p>
      <p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-more-copy" />
        </svg>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Liebiao",
  data() {
    return {
      info: []
    };
  },
  created() {
    this.$http.get("http://www.abs.com/list").then(res => {
      console.log(res.data.list);
      this.info = res.data.list;
    });
  }
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>