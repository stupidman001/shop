<template>
    <!-- 个人信息 -->
    <div class="personInfo" style="lineheight: 64px; padding: 10px">
      <div style="width: 64px; height: 64px">
        <!-- 头像 -->
        <van-image
          round
          width="4rem"
          height="4rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <!-- 用户名 -->
      <div style="flex:15; paddingLeft:20px; fontsize:20px;lineHeight:64px">
        <span>{{ username }}</span>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: "lisi",
    };
  },
};
</script>

<style scoped lang="scss">
.personInfo {
  display: flex;
  flex-direction: row;
  border-bottom:1px solid black ;
}
</style>