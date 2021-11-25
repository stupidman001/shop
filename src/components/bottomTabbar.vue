<template>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" class="tabbar">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="add-o">发布</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabs: [],
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  }
};
</script>

<style scoped>
  .tabbar{
    position: fixed;
    bottom:0px;
  }
</style>