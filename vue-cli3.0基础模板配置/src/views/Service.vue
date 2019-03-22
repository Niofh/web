<template>
  <div class="service">
    <OFHeader/>
    <div class="service-content">
      <div class="default-wrap">
        <h2 class="header-title">白标合作流程</h2>
        <div class="body">
          Smart Elite为白标合作伙伴提供一站式综合白标解决方案，帮助经纪商塑造专属公司品牌的交易平台。通过引入我们的先进技术和成熟的业务模式，广大经纪商、代理商将获得强大、稳定的技术及运营后援支持，快速解决前端至后台全部系统操作相关疑问的同时，
          高效、迅速地把握金融发展脉搏，抢占商业发展新机遇。
        </div>
        <table class="table">
          <thead>
          <tr>
            <th></th>
            <th>具体流程</th>
            <th>时间</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td class="td2">Smart Elite商务顾问提供白标服务合作细节咨询服务</td>
            <td> 3个工作日</td>
          </tr>
          <tr>
            <td>2</td>
            <td class="td2">签署Smart Elite运营商白标服务协议</td>
            <td>1个工作日</td>
          </tr>

          <tr>
            <td>3</td>
            <td class="td2">签署第三方支付协议</td>
            <td>5个工作日</td>
          </tr>
          <tr class="table-rowspan2">
            <td class="td1" rowspan="2">
              <span class="number">4</span>
            </td>
            <td class="td2">
              <div class="">贵公司提供基础信息：</div>
              <div class="">1）公司简介、官方网址、官网邮箱、联系方式、公司条款协议色彩方案等</div>
              <div class="">2）公司商标（LOGO）图片应用于后台设置和APP交易软件</div>
            </td>
            <td class="td3"><span class="day">5个工作日</span></td>
          </tr>
          <tr>
            <td class="td2">
              <div class="">1）申请APP段白式码（DNU）</div>
              <div class="">2）完成DNU申请后，申请AppStore开发者资质认证</div>
              <div class="">3）申请安卓市场发布账号（例：小米、华为、VIVO等）</div>
              <div class="">4）申请微信第三方登录账号</div>
            </td>
            <td class="td3"><span class="day">15个工作日</span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <OFFooter/>
  </div>
</template>

<script>

  import OFHeader from "../components/header/header"
  import OFFooter from "../components/footer/footer"

  export default {
    name: 'Service',
    components: {
      OFHeader,
      OFFooter
    }
  }

</script>
<style lang="stylus">

</style>

<style lang="stylus" scoped>
  .service-content {
    padding 70px 0
    background-color #eef2f4
    text-align center
    .header-title {
      margin-bottom 30px
      font-size: 30px;
      color: #444444;
    }
    .body {
      margin 0 auto
      margin-bottom 46px
      width: 945px;
      line-height: 28px;
      color: #797b7e;
    }

    .table {
      margin 0 auto
      width: 890px;
      font-size: #333;
      border-collapse: collapse;
      border-spacing: 0;
    }
    .table thead {
      border 1px solid #4e68af
      background-color #4e68af
      font-size: 16px;
      line-height: 50px;
      color: #ffffff;
      tr th {
        height 50px
      }
    }
    .table tbody {
      background-color #fff
    }
    .table tbody tr {
    }
    .table tbody tr td {
      border 1px solid #e4e4e4
      font-size: 14px;
      line-height: 28px;
      color: #797b7e;
      padding 12px
    }

    .table {
      .td1 {
        position relative
        .number {
          position absolute
          top: 95px
        }

      }
      .td2 {
        text-indent 36px
        text-align left
      }
      .td3 {
        position relative
        .day {
          position absolute
          left 30px
          top 46px
        }
      }
    }

  }

</style>
