<template>
	<view class="login-container">
		<!-- <uni-icon type="contaner-filled" size="100"></uni-icon>-->
		<button type="primary" class="btn-login" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button>
		<text class="tips-text">登陆后尽享更多权益</text>
	</view>
</template>

<script>
	export default {
		name:"my-login",
		data() {
			return {
				
			};
		},
		methods:{
			//获取用户基本信息
			getUserInfo(e){
				console.log(e)
				if(e.detail.errMsg === 'getUserInfo:fail auth deny')
				return uni.$showMsg('您取消了授权')
				
				wx.getUserProfile({
					success:async res =>{
						
						let code = await this.getCode();
						wx.request({
							url:'',
							data:{
								code:code
							},
							method:'get',
							success:res=>{
								
							}
						})
					}
				})
				
			},
			getCode(){
				return new Promise((resolve,reject)=>{
					wx.login({
						success:res=>{
							resolve(res.code)
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss">
.login-container{
	height: 750rpx;
	background-color: #f8f8f8;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	&::after{
		content: ' ';
		display: block;
		width: 100%;
		height: 40px;
		background-color: white;
		position: absolute;
		bottom: 0;
		left: 0;
		border-radius: 100%;
		transform: translateY(50%);
	}
	.btn-login{
		width: 90%;
		border-radius: 100px;
		margin: 15px 0;
		background-color: #C00000;
	}
	.tips-text{
		font-size: 12px;
		color: gray;
	}
}
</style>