<template>
  <div id="collection">
    <!-- 上边栏返回 -->
    <van-nav-bar
      class="back"
      title="我的收藏"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <!-- 订单列表 -->
    <div class="list">
      <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        v-for="(item, index) in orderList"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.van-nav-bar {
  position: fixed;
  top: 0px;
  width: 100%;
}
.list{
  margin-top:46px;
}
</style>