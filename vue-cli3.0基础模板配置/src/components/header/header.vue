<template>
  <div class="of-header default-wrap">
    <div class="header-left">
      <img src="../../assets/img/logo.png" alt="logo">
    </div>
    <div class="header-right">
      <div class="right-nav-wrap">
        <router-link class="nav-item" to="/" exact>首页</router-link>
        <router-link class="nav-item" to="/solution">解决方案</router-link>
        <router-link class="nav-item" to="/service">服务</router-link>
        <router-link class="nav-item" to="/about">关于我们</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OFHeader"
  }
</script>
<style lang="stylus">

</style>

<style lang="stylus" scoped>
  .of-header {
    padding 20px 0
    overflow hidden
    .header-left {
      float left
    }
    .header-right {
      float right
    }
    .right-nav-wrap {
      display flex
      .nav-item {
        padding 10px 0px
        margin-left 62px
        text-align center
        font-size 16px
        &.router-link-active {
          color #4e68af
          border-bottom 3px solid #4e68af
        }
      }
    }
  }
</style>
