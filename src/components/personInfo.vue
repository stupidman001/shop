<template>
  <div>
    <!-- 个人信息 -->
    <div class="personInfo" style="lineheight: 64px; padding: 10px">
      <div style="width: 64px; height: 64px">
        <van-image
          round
          width="4rem"
          height="4rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>

      <div style="flex:15; paddingleft:10px; fontsize:20px">
        <span>{{ username }}</span>
      </div>

      <div style="flex: 1">
        <van-icon name="arrow" color="rgb(150, 151, 153)" />
      </div>
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

<style scoped>
.personInfo {
  display: flex;
  flex-direction: row;
}
</style>