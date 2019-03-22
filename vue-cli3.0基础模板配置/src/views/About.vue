<template>
  <div class="about">
    <OFHeader/>
    <div class="banner">
        <div class="banner-content">
          <img class="header" src="../assets/img/logo-about.png" alt="">
          <div class="body">
            samrt elite致力于为国际高端金融人士提供一站式金融云服务平台。我们秉持“公平、透明、高效、安全”的服务宗旨，
            凭借丰富的市场经验和雄厚的技术实力，为白标合作伙伴提供一手数据源、交易平台搭建、软件定制开发、清算风险管理
            系统、客户代理管理系统、公司品牌营销推广、金融牌照申办等各方技术、管理及运营服务。
            <br/>
            samrt elite交易系统涵盖外汇、贵金属、股票、期货等千余种国际热门交易工具，实时报价来源于世界多家投行、交易所
            和数据服务商。报价紧贴国际市场，突破时空限制，全天候流通供应，可实现海量国际用户极速、稳定的在线交易，快速
            成交订单。直观简洁的交易界面、功能强大的图表分析、专业的DOM快速点击操作，全方位提升用户体验，快速增强用户
            粘性。
            <br/>
            <br/>
            我们以国际视野审视当今金融市场最新发展趋势，立足于金融行业经纪商业务实际，助力白标合作伙伴快速击退业务拓展
            阻力，高效抢占金融市场先机。
          </div>
        </div>
    </div>
    <OFFooter/>
  </div>


</template>
<script>
  import OFHeader from "../components/header/header"
  import OFFooter from "../components/footer/footer"

  export default {
    name: 'About',
    components: {
      OFHeader,
      OFFooter
    }
  }
</script>

<style lang="stylus" scoped>
  .banner {
    width 100%
    min-width 1200px
    height 803px
    background url("../assets/img/banner1.jpg") no-repeat
    .banner-content{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 880px;
      height: 430px;
      background-color: rgba(0,0,0,.4);
      transform translate(-50%,-50%)
      text-align center
      .header{
        margin-top 54px
        margin-bottom 30px
      }
      .body{
        padding 0 50px
        font-size: 14px;
        line-height: 24px;
        color: #ffffff;
        text-align left
      }
    }
  }
</style>
