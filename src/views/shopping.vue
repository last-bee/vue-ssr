<template>
  <div>
    <div>{{ title }}</div>
    <div v-for="(v, i) in list" :key="i"> 这是第{{ i + 1 }}行的数据 </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'SHOOPTING',
        list: new Array(10)
      }
    },
  }
</script>

<style scoped>

</style>