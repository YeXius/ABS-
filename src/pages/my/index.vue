<template>
    <div id="item">
        <headerCom :title="title"></headerCom>
        <div class="content">
            <div class="tou">
              <img src="/imgs/wode/1_03.png" alt="">
              <div class="hmz">
                <div class="haom">123****3213</div>
                <div class="zhy">
                  <div class="right">新新会员</div>
                  <div class="left">活力值0></div>
                </div>
              </div>
            </div>
            <div class="fahuo">
              <ul>
                <router-link to='/my/Dfk' tag='li'>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-qianbao"></use>
                  </svg>
                  <div>代付款</div>
                </router-link>
                <router-link to='/my/Dfh' tag='li'>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-icon-test"></use>
                  </svg>
                  <div>代发货</div>
                </router-link>
                <router-link to='/my/Psz' tag='li'>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fahuo"></use>
                  </svg>
                  <div>配送中</div>
                </router-link>
                <router-link to='/my/Ywc' tag='li'>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yiwancheng"></use>
                  </svg>
                  <div>已完成</div>
               </router-link>
              </ul>
            </div>
            <div class="kong"></div>
            <div class="youhj">
              <div class="yhj">
                <div class="wdyhj">我的优惠卷 <span>(0)</span> </div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youhuijuan"></use>
                </svg>
              </div>
              <div class="wdkb">
                <div class="wdyhj">我的卡包 <span>(0)</span> </div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weibiaoti-"></use>
                </svg>
              </div>
            </div>
            <div class="kong"></div>
            <div class="dizhi">
              <div class="dz">
                <div class="gl">地址管理</div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dizhi"></use>
                </svg>
              </div>
              <div class="lx">
                <div class="kf">联系客服</div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wenhao"></use>
                </svg>
              </div>
              <div class="gy">
                <div class="wm">关于我们</div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-women"></use>
                </svg>
              </div>
              <div class="she">
                <div class="zhi">设置</div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shezhi"></use>
                </svg>
              </div>
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

<style  lang="scss">
.content{
  width: 100%;
  height: 100%;
  // border: 0.01rem solid black;
}
.tou{
  width: 100%;
  height: 2.88rem;
  background: #2b2937;
  display: flex;
  img{
    width: 1.51rem;
    height: 1.51rem;
    margin-left: 0.35rem;
    margin-top: 0.65rem;
  }
  .hmz{
    width: 5rem;
    height: 1.11rem;
    // border: 0.01rem solid white;
    color: white;
    margin-top: 0.95rem;
    margin-left: 0.25rem;
    .haom{
      font-size: 0.3rem;
    }
    .zhy{
      width: 2.4rem;
      height: 0.35rem;
      border: 0.01rem solid red;
      border-radius: 0.5rem;
      display: flex;
      line-height: 0.35rem;
      margin-top: 0.35rem;
      font-size: 0.2rem;
      box-sizing:border-box;
      .right{
        width: 50%;
        height: 100%;
        text-align: center;
        background: red;
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
      }
      .left{
        width: 50%;
        height: 100%;
        text-align: center;
      }
    }
  }
}
.fahuo{
  width: 100%;
  height: 1.8rem;
  ul{
    display: flex;
    list-style: none;
    li{
      width: 25%;
      height: 1.8rem;
      .icon{
        font-size: 0.63rem;
        display: block;
        margin: 0 auto;
        margin-top: 0.3rem;
      }
      div{
        font-size: 0.3rem;
        text-align: center;
        display: block;
        margin-top: 0.1rem;
      }
    }
  }
}
.kong{
  width: 100%;
  height: 0.19rem;
  background: #ececec;
}
.youhj{
  width: 100%;
  height: 2.17rem;
  .yhj{
    width: 100%;
    height: 1.07rem;
    border-bottom: 0.01rem solid #ececec;
    display: flex;
    line-height: 1.07rem;
    .wdyhj{
      font-size: 0.35rem;
      margin-left: 0.2rem;
      span{
        color: gray;
      }
    }
    .icon{
        font-size: 0.6rem;
        margin-left: 3.5rem;
        margin-top: 0.2rem;
    }
  }
  .wdkb{
    width: 100%;
    height: 1.07rem;
    // border: 0.01rem solid red;
    display: flex;
    line-height: 1.07rem;
    .wdyhj{
      font-size: 0.35rem;
      margin-left: 0.2rem;
      span{
        color: gray;
      }
    }
    .icon{
        font-size: 0.75rem;
        margin-left: 3.8rem;
        margin-top: 0.2rem;
    }
  }
}
.dizhi{
  width: 100%;
  height: 5.83rem;
  // border: 0.01rem solid red;
  .dz{
    width: 100%;
    height: 1.07rem;
    border-bottom: 0.01rem solid #ececec;
    display: flex;
    line-height: 1.07rem;
    .gl{
      font-size: 0.35rem;
      margin-left: 0.2rem;
      span{
        color: gray;
      }
    }
    .icon{
        font-size: 0.7rem;
        margin-left: 4.7rem;
        margin-top: 0.2rem;
    }
  }
  .lx{
    width: 100%;
    height: 1.07rem;
    border-bottom: 0.01rem solid #ececec;
    display: flex;
    line-height: 1.07rem;
    .kf{
      font-size: 0.35rem;
      margin-left: 0.2rem;
      span{
        color: gray;
      }
    }
    .icon{
        font-size: 0.65rem;
        margin-left: 4.7rem;
        margin-top: 0.2rem;
    }
  }
  .gy{
    width: 100%;
    height: 1.07rem;
    border-bottom: 0.01rem solid #ececec;
    display: flex;
    line-height: 1.07rem;
    .wm{
     font-size: 0.35rem;
      margin-left: 0.2rem;
      span{
        color: gray;
      }
    }
    .icon{
        font-size: 0.65rem;
        margin-left: 4.7rem;
        margin-top: 0.2rem;
    }
  }
  .she{
    width: 100%;
    height: 1.07rem;
    border-bottom: 0.01rem solid #ececec;
    display: flex;
    line-height: 1.07rem;
    .zhi{
      font-size: 0.35rem;
      margin-left: 0.2rem;
      span{
        color: gray;
      }
    }
    .icon{
        font-size: 0.65rem;
        margin-left: 5.4rem;
        margin-top: 0.2rem;
    }
  }
}
</style>