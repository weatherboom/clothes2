<template>
	<view class="container">
		<view class="header">
			<view class="user-head">
				<image class="user-pic" src="@/static/mine-pic/一般_用户.png" mode=""></image>
				<view class="name-hi">
					<text class="name">昵称</text>
					<text class="hello">欢迎光临</text>
				</view>
			</view>
		</view>
		<!-- <view class="vip">
			<view class="open-vip">
				<text>开通会员享洗护折扣</text>
				<button type="primary" size="mini">立即充值</button>
			</view>
		</view> -->
		<section class="section">
			<uni-list class="user-list">
				<uni-list-item title="" note="">个人钱包</uni-list-item>
				<uni-list-item title="" note="">碳积分</uni-list-item>
				<uni-list-item title="" note="">验劵核销</uni-list-item>
				<uni-list-item title="" note="">我的订单</uni-list-item>
				<uni-list-item title="" note="">洗护套餐</uni-list-item>
				<uni-list-item title="" note="">我的云洗店</uni-list-item>
				<uni-list-item title="" note="">优惠劵</uni-list-item>
				<uni-list-item title="" note="">开发票</uni-list-item>
				<uni-list-item title="" note="">洗护衣柜</uni-list-item>
				<uni-list-item title="" note="">加盟信息</uni-list-item>
			</uni-list>
		</section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.contanier{
	margin: 0;
	padding: 0;
	list-style: none;
}
.header{
	width: 100vw;
	height:130px;
	background-image: url('@/static/mine-pic/矩形 1.png');
	background-repeat: no-repeat;
	background-size: contain;
	position: relative;
	margin-top: 0px;
	padding: 10px 20px ;
	z-index: -1;
	.user-head{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20px;
		.name-hi{
			display: flex;
			flex-direction: column;
			margin-left: 90px;
			.name{
				font-size: 18px;
				line-height: 20px;
			}
			.hello{
				font-size: 14px;
				line-height: 14px;
				margin-top: 4px;
			}
		}
	}
}
.user-pic{
	width: 60px;
	height: 60px;
	position: absolute;
}
.vip{
	display: flex;
	flex-direction: row;
	justify-content: center;
	.open-vip{
		background-color: #3D3D3D;
		width: 80vw;
		height: 40px;
		border-radius: 8px;
		display: flex;
		flex-direction: row;
		align-items: center;
		&>text{
			font-size: 14px;
			line-height: 14px;
			margin-left: 20px;
			color: antiquewhite;
		}
		.recharge{
			width: 30px;
			height: 10px;
			border-radius: 12px;
			font-size: 12px;
			line-height: 12px;
			text-align: center;
		}
	}
	
}

.section{
	width: 90%;
	position: absolute;
	top: 104px;
	left: 21px;
	margin: 0 auto;
	border-radius: 8px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	opacity: 1;
	background-color: #ffffff;
	.user-list{
		display: flex;
		flex-direction: column;
		& > uni-list-item{
			font-size: 16px;
			line-height: 30px;
			padding: 5px 10px;
			
		}
	}
}

</style>
