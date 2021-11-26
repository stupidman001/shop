<template>
  <div>
    <!-- 上边栏操作区 -->
    <van-nav-bar
      title="省心卖"
    />
    <van-cell-group>
      <!-- 商品名称 -->
      <van-field
        v-model="value"
        label="宝贝名称"
        placeholder="请输入商品名称"
      />
      <!-- 选择种类 -->
      <van-cell is-link @click="showPopup">商品种类</van-cell>
      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
        <van-picker
          title="标题"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
      </van-popup>
      <!-- 上传图片 -->
      <div style="paddingLeft: 16px;fontSize: 14px">
        <span>商品图片:(商品图片上传)</span>
        <div>
          <van-uploader v-model="fileList" multiple :max-count="5" />
        </div>
      </div>
      <!-- 价格 -->
      <van-field v-model="value" label="售价" placeholder="出售价格" />
      <!-- 原价 -->
      <van-field label="原价" :value="originalPrice" />

      <!-- 选择售出地址 -->
      <van-cell is-link @click="showPopup">出售地址</van-cell>
      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
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
      value: "",
      show: false,
      columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
      fileList: [],
      originalPrice: "",
      message: "",
      areaList,
    };
  },
  methods: {
    // 分类选择开始
    showPopup() {
      this.show = true;
    },
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast("取消");
    },
    // 分类选择完毕

    // 图片上传
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
};
</script>

<style scoped>
</style>