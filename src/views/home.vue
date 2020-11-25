<template>
  <div class="main-content">
    <div class="title">{{ title }}</div>
    <!-- <router-link :to="{path: '/login', query: { id: '12333' }}">to login</router-link> -->
    <p>button</p>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <p>cell</p>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <p>popup</p>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'this is home page',
        show: false
      }
    },
    beforeMount() {
      console.log(this.$route.path)
    },
    methods: {
      showPopup() {
        this.show = true;
      },
    }
  }
</script>

<style scoped lang="scss">
.title {
  font-size: 20px;
  color: red;
  height: 40px;
  line-height: 40px;
}
p {
  height: 40px;
  font-size: 24px;
  color: #444eca;
  font-weight: bold;
  line-height: 40px;
  text-shadow: 2px 2px 2px grey;
}
</style>