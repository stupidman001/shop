<template>
	<div id="order_list">
		<Card v-if="cards" />
	</div>
</template>

<script>
import Card from "./Card.vue"
export default {
	components:{
		Card
	},
	props:['cards'],
}
</script>

<style scoped lang="scss">
	.order_list{
		
	}
</style>
