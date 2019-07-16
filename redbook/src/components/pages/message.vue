<template>
  <div class="message">
    <div class="header">
      <div class="msg">消息</div>
      <div class="header-right">
        <slot name="right-icon"></slot>
      </div>
    </div>
    <div class="middle">
      <div class="left">
        <slot name="left-icon">
        <p>赞和收藏</p>
      </div>
      <div class="middle">
        <slot name="middle-icon">
        <p>新增关注</p>
      </div>
      <div class="right">
        <slot name="right-icon">
        <p>评论和@</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.message
  width 100%
  height 100%
  .header
    width 100%
    height 25px
    .
</style>
