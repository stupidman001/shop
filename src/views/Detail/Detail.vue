<template>
  <div id="detail">
    <!-- 顶部的返回菜单 -->
    <van-nav-bar
      class="back"
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 商品的简单介绍 上传商品页中的 留言 信息-->
    <div class="productInfo">
      <div>
        <span>商品介绍:</span>
        {{ description }}
      </div>

      <!-- 商品的详细信息 -->
      <div style="color: red">
        <span>现价:</span>
        ￥{{ price }}
      </div>

      <div>
        <span>原价:</span>
        ￥<i style="text-decoration: line-through">{{ orginalPrice }}</i>
      </div>

      <div>
        <span>商品种类:</span>
        {{ productName }}
      </div>
    </div>

    <!-- 关于商品的图片 -->
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />

    <!-- 为你推荐 -->
    <div class="recommend"><van-icon name="gem-o" color="red" />为你推荐</div>
    <orderList :cards="cards" />

    <!-- 下边栏购买操作 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="留言" @click="chat" />
      <van-goods-action-icon icon="star-o" text="收藏" @click="collect" />
      <van-goods-action-button type="danger" text="立即购买" @click="buy" />
    </van-goods-action>
  </div>
</template>

<script>
import orderList from "@/components/orderList.vue";
export default {
  data() {
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      // 价格
      price: 500,
      // 原价
      orginalPrice: 1000,
      //商品的名字
      productName: "笔记本电脑",
      description:
        "退圈了，家人不让玩了，168买的退圈了，家人不让玩了，168买的退圈了，家人不让玩了，168买的退圈了，家人不让玩了，168买的",
      cards: [1, 2, 3, 4, 5],
    };
  },
  components: {
    orderList,
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 点击留言
    chat() {
      console.log("留言了");
    },
    // 点击收藏
    collect() {
      console.log("点击收藏");
    },
    // 点击购买
    buy() {
      console.log("点击购买");
    },
  },
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
}
span {
  font-size: 12px;
  font-weight: 100;
}
.back {
  position: fixed;
  top: 0px;
  width: 100%;
}
.productInfo {
  margin-top: 50px;
  padding-left: 10px;
  div {
    margin-bottom: 5px;
  }
}

/* 商品推荐文案 */
.recommend {
  text-align: center;
}
</style>