<template>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" class="tabbar">
      <van-tabbar-item icon="home-o" @click="$router.push('/')">主页</van-tabbar-item>
      <van-tabbar-item icon="add-o" @click="$router.push('/publish')">发布</van-tabbar-item>
      <van-tabbar-item icon="user-o" @click="$router.push('/mine')">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabs: [],
    };
  }
};
</script>

<style scoped>
  .tabbar{
    position: fixed;
    bottom:0px;
    z-index:999;
  }
</style>