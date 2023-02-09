<template>
	<view >
		<my-login v-if="!token">登录</my-login>
		<my-userinfo v-else></my-userinfo>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			
		},
		computed:{
			...mapState('m_user',['token'])
		}
	}
</script>

<style lang="scss">


</style>
