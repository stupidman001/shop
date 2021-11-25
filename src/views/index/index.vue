<template>
  <div>

    <!-- 顶部搜索框 -->
    <van-search
      v-model="searchValue"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
    />

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 标签页切换 -->
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in tabs" :key="index">
        <template #title> <van-icon :name="item.icon" />选项 </template>
        {{ item.type }}
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
export default {
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
      tabs:[
          {
              icon:'goods-collect',
              type:'全部'
          },
          {
              icon:'wap-home',
              type:'生活'
          },
          { 
              icon:'goods-collect',
              type:'服装'
          },
          { 
              icon:'gift',
              type:'食品'
          },
          { 
              icon:'service',
              type:'数码'
          }
      ]   
    };
  },
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
}
</style>