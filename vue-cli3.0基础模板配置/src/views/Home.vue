<template>
  <div class="home ">
    <OFHeader/>
    <div class="banner">
      <img class="banner-img" src="../assets/img/banner.jpg" alt="">
    </div>
    <div class="home-content">
      <div class="default-wrap">
        <div class="home-content-wrap">
          <div class="content-item">
            <h2 class="title">提供服务</h2>
            <div class="desc">
              股票配资系统建设 、资源整合
              <br/>
              风险把控 、运营指导、技术支持
            </div>
            <el-button>查看详情</el-button>
            <img class="phone" src="../assets/img/phone.png" alt="">
          </div>
          <div class="content-item partner-warp" style="margin-left: 28px">
            <h2 class="title partner-title">合作伙伴</h2>
            <div class="partner-logo">
              <img class="partner-item" style="padding-left: 0" src="../assets/img/aliyun.png"/>
              <img class="partner-item" src="../assets/img/anquangou.png"/>
              <img class="partner-item" src="../assets/img/baidu.png"/>
              <img class="partner-item" style="padding-left: 6px" src="../assets/img/tencent.png"/>
              <img class="partner-item" src="../assets/img/zhifubao.png"/>
              <img class="partner-item" src="../assets/img/yinshengbao.png"/>
            </div>
          </div>
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
    name: 'Home',
    components: {
      OFHeader,
      OFFooter
    }
  }
</script>

<style lang="stylus" scoped>


  .banner {
    width 100%
    .banner-img {
      margin 0 auto
      width 100%
      min-width 1200px
      min-height 100px

    }
  }

  .home-content {
    padding 40px 58px
    background-color #eef2f4

  }

  .home-content-wrap {
    display flex
  }

  .content-item {
    position relative
    flex 1
    padding 30px
    background #fff
    .title {
      font-size: 24px;
    }
    .desc {
      margin 20px 0 30px 0
      font-size: 14px;
      line-height: 28px;
      color: #797b7e;
    }
    .phone{
      position absolute
      right 0
      top 25px
    }
    .partner-title {
     margin-left 10px
    }
    .partner-logo {
      margin 10px 0
      display flex
      flex-wrap: wrap
      .partner-item {
        text-align left
        width 130px
        padding 10px 20px

      }
    }
  }

</style>
