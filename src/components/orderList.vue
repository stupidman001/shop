<template>
  <div id="order_list">
    <Card v-for="(item, index) in cards" :key="index" @click.native="checkDetail" />
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  props: ["cards"],
  methods: {
    checkDetail() {
      this.$router.push('/detail')
    },
  },
};
</script>

<style scoped lang="scss">
#order_list {
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
  padding-bottom: 50px;
}
</style>
