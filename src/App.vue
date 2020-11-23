<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link :to="{path: '/login', query: { id: '12333' }}">to login</router-link>
    <router-link :to="{path: '/home', query: { id: '12333' }}">to home</router-link>
    <router-link :to="{path: '/user', query: { id: '12333' }}">to user</router-link>
    <router-link :to="{path: '/shopping', query: { id: '12333' }}">to shopping</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a {
    padding: 10px;
  }
}
</style>
