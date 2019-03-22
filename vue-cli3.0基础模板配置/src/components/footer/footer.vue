<template>
  <div class="of-footer ">
    <div class="footer-wrap">
      <div class="default-wrap">

        <img src="../../assets/img/footer-logo.png" alt="footer-logo.png">
        <div class="logo-wrap">
          <el-popover
            ref="popover"
            placement="top-start"
            width="150"
            trigger="hover"
          >
            <img  width="130" style="margin-left: 10px" src="../../assets/img/wxQrcode.png" alt="">
          </el-popover>
          <img v-popover:popover class="logo-item" src="../../assets/img/wx.png" width="45" height="45" alt="微信">

          <img  class="logo-item" src="../../assets/img/QQ.png" width="45" height="45" alt="QQ"
            @click="onClickQQ"
          >
        </div>
      </div>
    </div>
    <div class="footer-copyright ">
      <div class="default-wrap">
        <div class=" copyright ">Copyright © 2019 Smart Elite. All Rights Reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OFFooter",
    methods:{
      onClickQQ(){
        window.open("tencent://message/?uin=123456789");
      }
    }
  }
</script>
<style lang="stylus">

</style>

<style lang="stylus" scoped>
  .footer-wrap {
    padding 32px 0
    background-color #4c4c4c;
    overflow hidden
    .logo-wrap {
      float right
      .logo-item{
        margin-left 20px
        cursor pointer
      }
    }
  }

  .footer-copyright {
    overflow hidden
    background-color #404040;
    .copyright {
      padding 10px 0
      float right
      font-size: 14px;
      color: #7d7d7d;
    }
  }
</style>
