<template>
  <div id="order_list">
    <Card v-for="(item, index) in cards" :key="index" />
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  props: ["cards"],
};
</script>

<style scoped lang="scss">
#order_list {
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:5px;
  padding-bottom:50px;
}
</style>
