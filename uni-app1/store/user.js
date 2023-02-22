export default{
	//开启命名空间
	namespaced:true,
	//数据
	state:()=>{
		address:JSON.parse(uni.getStorageSync('address')||'{}'),
		
		token:'',
	},
	//方法
	mutations:{
		updateAddress(){
			
		}
	}
}