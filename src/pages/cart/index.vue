<template>
  <div id="item">
    <headerCom :title="title"></headerCom>
    <div class="content">
      <ul class="list">
        <li class="list-li" v-for="(i,n) in list" :key="n">
          <div class="list-div1">
            <div class="circle" :class="{circles:!i.f}" @click="check(i)"></div>
          </div>
          <div class="right">
            <div class="list-div2">
              <img :src="i.img" alt />
            </div>
            <div class="list-div3">
              <div class="name">{{i.name}}</div>
              <div class="type">{{i.type}}</div>
              <div class="btn">
                <button class="btn1" @click="jian(i)">-</button>
                <button class="btn2">{{i.num}}</button>
                <button class="btn3" @click="jia(i)">+</button>
              </div>
              <div class="price">￥{{i.price}}</div>
            </div>
          </div>
        </li>
        <div class="rmb">
          <div class="rmb1">
            <div class="rmb1-left">
              <div class="circle" :class="{circles:!f}" @click="allcheck"></div>
            </div>
            <div class="rmb1-right">
              <div class="lefttxt">已选(5)</div>
              <div class="prices">￥6495</div>
            </div>
          </div>
          <div class="rmb2">结算</div>
        </div>
      </ul>
    </div>
    <footerCom></footerCom>
  </div>
</template>

<script>
import footerCom from "../../components/footer";
import headerCom from "../../components/header";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    footerCom,
    headerCom
  },
  // created() {
  //   this.$http.get('./cth.json').then(res=>{
  //   //  console.log(res.data.car)
  //   })

  // },
  data() {
    return {
      title: "",
      f: false,
      list: [
        {
          img: "./imgs/list_imgs/01.png",
          name: "Carina轻温暖连帽鹅绒服-...",
          type: "尺寸：M 颜色 ：黑色",
          price: 199,
          num: 1,
          f: false
        },
        {
          img: "./imgs/list_imgs/01.png",
          name: "Carina轻温暖连帽鹅绒服-...",
          type: "尺寸：M 颜色 ：黑色",
          price: 199,
          num: 1,
          f: false
        },
        {
          img: "./imgs/list_imgs/03.png",
          name: "Carina轻温暖连帽鹅绒服-...",
          type: "尺寸：XL 颜色 ：黑色",
          price: 399,
          num: 1,
          f: false
        }
      ]
    };
  },
  methods: {
    check(i) {
      i.f = !i.f;
    },
    allcheck(){
      this.f=!this.f
    },
    jian(i) {
      if (i.num >1) {
        i.num--;
      }
    },
    jia(i) {
      i.num++;
    }
  },
  computed: {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.title = to.meta.title;
    });
  }
};
</script>

<style>
.content {
  background: #ededed;
}
.right {
  display: flex;
  width: 95%;
}
.list {
  height: 100%;

  box-sizing: border-box;
  /* padding-top:.1rem; */
  background: #ededed;
}
.list-li {
  display: flex;
  background: #fff;
  box-sizing: border-box;
  padding: 0.4rem 0.3rem 0.4rem 0.3rem;
  margin-top: 0.2rem;
  justify-content: space-around;
  align-items: center;
}
.list-div1 {
  width: 5%;
}
.list-div2 {
  width: 30%;
  margin-left: 0.1rem;
}
.list-div2 img {
  width: 100%;
}
.list-div3 {
  margin-left: 0.3rem;

  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  box-sizing: border-box;
}
.btn {
  box-sizing: border-box;
  width: 2rem;
  height: 0.5rem;
  display: flex;
  position: absolute;
  right: 0rem;
  bottom: 0.4rem;
}
.btn1,
.btn3 {
  width: 25%;
  background: #fff;
  border: none;
  outline: none;
}
.btn1 {
  font-size: 0.4rem;
  border-top: 0.01rem solid #000;
  border-left: 0.01rem solid #000;
  border-bottom: 0.01rem solid #000;
}
.btn3 {
  font-size: 0.4rem;
  color: #9e2c58;
  border-top: 0.01rem solid #9e2c58;
  border-right: 0.01rem solid #9e2c58;
  border-bottom: 0.01rem solid #9e2c58;
}
.btn2 {
  width: 50%;
  background: #fff;
  border: 0.01rem solid #9e2c58;
  outline: none;
}
.name {
  color: #000;
  font-size: 0.32rem;
}
.price {
  color: #9e2c58;
  margin-top: 0.4rem;
  font-size: 0.4rem;
}
.type {
  color: #afafaf;
}
.circle {
  width: 0.4rem;
  height: 0.4rem;
  border: 0.01rem solid #ddd;
  border-radius: 50%;
  position: relative;
}
.circles {
  width: 0.4rem;
  height: 0.4rem;
  background: #d7003d;
  border-radius: 50%;
}
.circles:after {
  content: "";
  width: 0.24rem;
  height: 0.12rem;
  border: 0.01rem solid #fff;
  position: absolute;
  transform: rotate(-45deg);
  top: 0.05rem;
  left: 0.1rem;
  border-color: transparent transparent #fff #fff;
}
.rmb {
  padding: 0.3rem 0 0.3rem 0.3rem;
  display: flex;
  height: 1rem;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  bottom: 1.2rem;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
}
.rmb1 {
  width: 68%;
  box-sizing: border-box;
  display: flex;
}
.rmb2 {
  width: 32%;
  background: #cd013e;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
}
.rmb1-left {
  display: flex;
  align-items: center;
}
.rmb1-right {
  box-sizing: border-box;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: space-between;
}
.prices {
  font-size: 0.3rem;
  color: #9e2c58;
}
.lefttxt {
  margin-left: 0.2rem;
}
</style>