<template>
  <div id="app">
    <v-message>
    </v-message>
  </div>
</template>

<script>
import message from '@/components/message'
export default {
  name: 'App',
  components: {
    'v-message': message
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
