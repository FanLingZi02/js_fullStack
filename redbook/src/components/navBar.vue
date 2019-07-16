<template>
  <div class="navbar">
    <mt-popup v-model="popupVisible" position="left">
      <panel></panel>
    </mt-popup>
    <div class="app">
      <div class="nav">
        <div class="nav_center">
          <ul class="nav_tab">
            <li class="tab-item">
              <router-link to="/main1">关注</router-link>
            </li>
            <li class="tab-item">
              <router-link to="/main2">发现</router-link>
            </li>
            <li class="tab-item">
              <router-link to="/main3">附近</router-link>
            </li>
          </ul>
        </div>
      <div class="search">
          <div class="search-input">
            <img src="../assets/search.png" />
            <input type="text" placeholder="搜索笔记、商品和用户" @focus="focus()">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popupVisible:false
    }
  },
  methods: {
    focus () {    //搜索框聚焦则跳转到搜索页面
      this.$router.push('/search')
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
*
  margin 0
  padding 0
  .navbar
    .mint-popup-left
      width 65%
      height 100%
  .app
    width 100%
    font-size 16px
    font-family sans-serif
    a
      color grey
      text-decoration none
    a:visited
      color grey
    .nav
      display flex
      flex-direction row
      .nav_center
        flex 3
        height 1.02rem
        color #a6a6a6
        line-height 1.02rem
        padding-top 0.28rem
        font-size 0.46rem
        ul li
          list-style none
        .nav_tab
          width 100%
          display flex
          flex-direction row
          .tab-item a
            text-decoration none
          .tab-item
            width 27%
            text-align center
            margin-left auto
            margin-right auto
    .search
      width 100%
      height 1.20rem
      line-height 1.20rem
      margin-top 0.19rem
      text-align center
      .search-input
        width 90%
        height 0.83rem
        margin-left auto
        margin-right auto
        display flex
        flex-direction row
        border-radius 30px
        background #e6e6e6
        img 
          width 0.50rem
          height 0.50rem
          margin 0.16rem
          margin-left 0.28rem
        input 
          width 90%
          height 0.83rem
          border none
          color #666666
          font-size 0.46rem
          border-radius 30px
          background #e6e6e6
</style>
