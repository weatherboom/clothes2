<template>
	<view>
		<view>页面未找到</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			let timer = setTimeout(()=>{
				clearTimeout((timer))
				uni.switchTab({
					url:'/pages/index/index'
				})
			},2000)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
