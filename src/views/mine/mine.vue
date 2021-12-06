<template>
  <div>
    <!-- 头像、昵称 -->
    <personInfo />
    <!-- 操作功能 -->
    <div class="operate">
      <van-cell is-link @click="release">我的发布</van-cell>
      <van-cell is-link @click="collect">我的收藏</van-cell>
      <van-cell is-link @click="message">我的消息</van-cell>
      <van-cell is-link @click="feedback">意见反馈</van-cell>
    </div>
    <!-- 校园地图 -->
    <img
      src="@/assets/img/map.jpg"
      alt="黑龙江大学地图"
      style="width: 100%"
      @click="checkImg"
    />
  </div>
</template>

<script>
import personInfo from "@/components/personInfo.vue";
import { ImagePreview } from "vant";
export default {
  components: {
    personInfo,
  },
  methods: {
    // 发布
    release() {},
    // 收藏
    collect() {
      this.$router.push("/collection");
    },
    // 消息
    message() {},
    // 意见反馈
    feedback() {},
    // 点击放大图片
    checkImg() {
      ImagePreview(["../../"]);
    },
  },
};
</script>