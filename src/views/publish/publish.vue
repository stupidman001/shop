<template>
  <div>
    <!-- 上边栏操作区 -->
    <van-nav-bar
      title="省心卖"
    />
    <van-cell-group>
      <!-- 商品名称 -->
      <van-field
        v-model="productName"
        label="宝贝名称"
        placeholder="请输入商品名称"
      />
      <!-- 选择种类 -->
      <van-cell is-link @click="showPopup">商品种类</van-cell>
      <van-popup v-model="showType" position="bottom" :style="{ height: '30%' }">
        <van-picker
          title="商品类型"
          show-toolbar
          :columns="typeColumns"
          @confirm="onConfirm"
          @cancel="showType = false"
        />
      </van-popup>
      <!-- 上传图片 -->
      <div style="paddingLeft: 16px;fontSize: 14px;paddingTop:10px">
        <span>商品图片：<span style="fontSize:12px;fontWeight:100">(最多5张)</span></span>
        <div style="paddingTop:10px;">
          <van-uploader v-model="fileList" multiple :max-count="5" />
        </div>
      </div>
      <!-- 价格 -->
      <van-field v-model="prince" label="售价" placeholder="出售价格" />
      <!-- 原价 -->
      <van-field label="原价" :value="originalPrice" placeholder="商品原价" />

      <!-- 选择售出地址 -->
      <van-cell is-link @click="checkAddress">出售地址</van-cell>
      <van-popup v-model="showAddress" position="bottom" :style="{ height: '30%' }">
        <van-area title="黑龙江大学" :area-list="areaList" />
      </van-popup>

      <!-- 描述 -->
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="留言"
        type="textarea"
        maxlength="100"
        placeholder="请输入留言"
        show-word-limit
      />
    </van-cell-group>
    <van-button type="primary" size="large" plain color="rgb(0, 0, 0)">发布商品</van-button>
  </div>
</template>

<script>
import { Toast } from "vant";

const areaList = {
  province_list: {
    110000: "A区",
    120000: "B区",
    130000: "C区",
    140000: "家属区",
  },
  city_list: {
    110100: "北京市",
    120100: "天津市",
  },
  county_list: {
    110101: "东城区",
    110102: "西城区",
  },
};

export default {
  data() {
    return {
      // 宝贝名称
      productName: "",
      // 控制商品种类是否显示
      showType: false,
      // 商品种类
      typeColumns: ["电脑", "手表", "衣服", "体育用品", "书本"],
      fileList: [],
      originalPrice: "",
      message: "",
      areaList,
      showAddress:false,
      // 商品的价格
      prince:""
    };
  },
  methods: {
    // 分类选择开始
    showPopup() {
      this.showType = true;
    },
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    // 分类选择完毕

    // 图片上传
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    // 选择 出售地址
    checkAddress(){
      this.showAddress = true
    }
  },
};
</script>

<style scoped>
</style>