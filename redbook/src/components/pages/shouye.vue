<template>
  <div id="app">
    <search v-show="searchShow"
            @searchhide="searchHide">
    </search>
    <div class="app" :class="{'showShadow':showshadow}" v-show="appshow&&!searchShow">
      <div class="nav">
        <!-- <masking @click.prevent="hidePanel" v-show="showpanel"></masking> -->
        <div class="nav_center">
          <ul class="nav_tab">
            <li class="tab-item">
              <router-link to="main1">关注</router-link>
            </li>
            <li class="tab-item">
              <router-link to="main2">发现</router-link>
            </li>
            <li class="tab-item">
              <router-link to="main3">附近</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="search">
          <div class="search-input">
            <img src="./assets/search.png" />
            <input type="text" placeholder="搜索笔记、商品和用户" @focus="focus()">
          </div>
      </div>
      <v-touch 
        v-on:swipeleft="onSwipeLeft" 
        :priority="1">
        <router-view></router-view>
      </v-touch>
    </div>
  </div>
</template>
<script>
import Search from './components/Search.vue'
export default {
  data() {
    return {
      // showshadow: false,
      showpanel: false,
      searchShow: false,
      appshow: true
    }
  },
  methods: {
    showPanel () {
      this.showpanel = true
    },
    hidePanel () {
      this.showpanel = false
    },
    focus () {    //搜索框聚焦则显示搜索页面，隐藏主页面
      this.searchShow = true
      this.appshow = false
    },
    searchHide () {   //隐藏搜索页面，显示主页面
      this.appshow = true
      this.searchShow = false
    }
  },
  components: {
    Search
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
*
  margin 0
  padding 0
  .showShadow
    position fixed
    top 0
    left 0
    right 0
    z-index 50
    background-color pink
  .app
    width 100%
    font-size 16px
    font-family sans-serif
    a
      text-decoration none
    .nav
      display flex
      flex-direction row
      .nav_center
        flex 3
        height 45px
        line-height 45px
        padding-top 8px
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
      height 50px
      line-height 50px
      margin-top 10px
      text-align center
      .search-input
        width 90%
        height 30px
        margin-left auto
        margin-right auto
        display flex
        flex-direction row
        border-radius 30px
        background #d9d9d9
        img 
          width 20px
          height 20px
          margin 5px
          margin-left 10px
        input 
          width 90%
          height 30px
          border none
          font-size 14px
          border-radius 30px
          background #d9d9d9
</style>

			