<template>
	<view>
		<view class="yf">
			{{cart.length}}
		</view>
	</view>
</template>

<script>
	import{mapState} from'vuex'
	export default {
		computed:{
			...mapState('m_cart',['cart'])
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
