<template>
  <div id="app">
    <Index />
    <bottomTabbar v-if="$route.meta.showTabbar" />
  </div>
</template>

<script>
import Index from "./views/index/index.vue";
import bottomTabbar from "../src/components/bottomTabbar.vue";
export default {
  components: {
    Index,
    bottomTabbar
  },
  created(){
    console.log(this.$route)
  }
};
</script>

