<template>
  <div id="app">

    <!-- 被缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"> </router-view>
    </keep-alive>

    <!-- 不被缓存 -->
    <router-view v-if="!$route.meta.keepAlive"> </router-view>
    <!-- 页面是否显示 tabbar -->
    <bottomTabbar v-if="$route.meta.showTabbar" />
  </div>
</template>

<script>
import bottomTabbar from "../src/components/bottomTabbar.vue";
export default {
  components: {
    bottomTabbar,
  },
};
</script>
<style scoped></style>