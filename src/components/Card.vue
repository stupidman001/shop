<template>
  <div id="card">
    <!-- 商品图片 -->
    <div class="img">
      <van-image
        width="170"
        height="150"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <!-- 校内|家属区 -->
    <div class="description">
      <van-tag type="primary">校内</van-tag>
      <span>{{ description }}</span>
    </div>
    <!-- 价格 -->
    <div class="price">
      <span>￥{{ price }}</span>
    </div>
    <!-- 卖家头像和昵称 -->
    <div class="seller">
      <van-image
        round
        width="1.5rem"
        height="1.5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <span class="nick">{{nickName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "退圈了，家人不让玩了，168买的",
      price: "2500",
      nickName:"lisi" 
    };
  },
};
</script>

<style lang="scss" scoped>
#card {
  padding:10px;
  display: flex;
  flex-direction: column;
  width: 170px;
  .img {
    flex: 4;
  }
  .description,
  .price,
  .seller {
    flex: 1;
  }
  .price {
    color: red;
  }
  .seller{
      .nick{
          padding:3px;
      }
  }
}
</style>