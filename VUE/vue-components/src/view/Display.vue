<template>
  <div>
    <h3>动态渲染 .vue 文件的组件--display</h3>
    <i-Display :code="code"></i-Display>
  </div>
</template>

<script>
import iDisplay from '@/components/com/display.vue'
import defaultCode from './default-code.js'
export default {
  components: {
    iDisplay
  },
  data() {
    return {
      code: defaultCode
    }
  },
}
</script>

<style>

</style>
