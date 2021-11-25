<template>
  <div>
    <van-cell-group>
      <van-field v-model="value" label="宝贝名称" placeholder="请输入商品名称" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
</style>