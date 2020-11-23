<template>
  <div>
    <div class="login-title">
      {{ title }}
    </div>
    <div>
      <!-- <router-link :to="{path: '/home', query: { code: 'refresh' }}">to home</router-link> -->
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'login'
      }
    },
  }
</script>

<style scoped>
.login-title {
  font-size: 20px;
  color: blue;
}
</style>