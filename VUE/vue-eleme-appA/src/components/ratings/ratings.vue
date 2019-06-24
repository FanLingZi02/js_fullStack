<template>
  <div class="ratings">
    <div class="left">
      <div class="score">
        <p>4.2</p>
      </div>
      <div class="score1">
         <p>综合评分</p>
      </div>
      <div class="score2">
         <p>高于周边商家62.9%</p>
      </div>
    </div>
    <div class="right">
      <p>服务态度</p>
      <p>商品评分</p>
      <p>配送时间38分钟</p>
      
    </div>
    <div class="manyi">
      <p>全部24</p>
      <p>满意18</p>
      <p>不满意6</p>
      <p>只看有内容的评价</p>
    </div>
    <!-- <div class="Ratings" ref="ratingsWrapper">
      <ul>
        <li v-for="(rating,index) in item.ratings" :key="index" class="ratings-item border-1px">
          <div class="content">
            <h2 class="username">{{rating.username}}</h2>
            <p class="ratetime">{{rating.ratime}}</p>
            <p class="deliveryTime">{{rating.deliveryTime}}</p>
            <p class="score">{{rating.score}}</p>
            <p class="rateType">{{rating.rateType}}</p>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'rating',
  data() {
    return {
      ratings:[],
    }
  },
 created(){
     this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
     this.$http.get('https://www.easy-mock.com/mock/5d00f514294a6f025a3f991e/element/goods')
     .then(res =>{
      //  console.log(res)
      if (res.data.errno === 0){
        this.ratings = res.data.data;
        this.$nextTick( () => {
          //保证html渲染完成后才会执行
          this._initScrool();
        }) 
      }
     })
 },
 methods:{
      // 给页面加滑动效果
      _initScrool () {
        this.ratingsScroll = new BScroll(this.$refs.ratingsWrapper, {
          click:true
        })
      }
 }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
.ratings
  width 100px
  height 100px 
  .left
    height 120px
    width 136px
    margin-left 52px
    margin-top 30px
    .score
      color yellow
      font-size 34px
    .score1
      font-size 12px
    .score2
      font-size 15px
      color rgb(147, 153, 159)
  .right
    height 120px
    width 238px 
    margin-left 136px
    margin-top -110px
    padding-left 70px 
    
  
</style>
