<template>
  <div>
    <!-- 顶部搜索框 -->
    <div class="search">
      <van-search
        v-model="searchValue"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
      />
    </div>

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" height="200" class="showSwipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 标签页切换 -->
    <van-tabs v-model="active" class="tabs">
      <van-tab v-for="(item, index) in tabs" :key="index">
        <template #title> <van-icon :name="item.icon" />选项 </template>
      </van-tab>
    </van-tabs>

    <!-- 订单列表组件 -->
    <orderList :cards="cards" />
  </div>
</template>

<script>
import orderList from "@/components/orderList.vue";
export default {
  components: {
    orderList,
  },
  data() {
    return {
      // 搜索框内容
      searchValue: "",
      // 轮播图
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      // tab 切换
      tabs: [
        {
          icon: "goods-collect",
          type: "全部",
        },
        {
          icon: "wap-home",
          type: "生活",
        },
        {
          icon: "goods-collect",
          type: "服装",
        },
        {
          icon: "gift",
          type: "食品",
        },
        {
          icon: "service",
          type: "数码",
        },
      ],
      active: 0,
      categories: [],
      cards: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
// 搜索框置顶
.search {
  position: fixed;
  top: 0px;
  z-index: 999;
  width: 100%;
}

.showSwipe {
  margin-top: 54px;
}

img {
  width: 100%;
  height: 100%;
}
</style>
