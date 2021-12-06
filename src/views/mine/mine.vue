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

  </div>
</template>

<script>
import personInfo from "@/components/personInfo.vue"
export default {
  components:{
    personInfo
  },
  methods:{
    // 发布
    release(){
      
    },
    // 收藏
    collect(){
      this.$router.push('/collection')
    },
    // 消息
    message(){

    },
    // 意见反馈
    feedback(){

    }
  }
};
</script>