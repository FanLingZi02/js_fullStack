<template>
  <div>
    {{$store.state.count}} times,
    <button @click="increment">+</button>
  </div>
</template>
<script>
export default {
  methods: {
    increment () {
      this.$emit('increment')
    } 
  }
}
</script>

<style>
</style>
