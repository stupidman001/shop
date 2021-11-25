<template>
  <div id="app">
    <router-view />
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