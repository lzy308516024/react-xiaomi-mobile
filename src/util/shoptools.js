let shopTools = {}
let shop = JSON.parse(window.localStorage.getItem('shopInfo'))|| {}


shopTools.addUpdate = function (goods){
	// 判断是否已经存在商品id
	if(shop[goods.id]){
		shop[goods.id] += goods.num
	}else{
		shop[goods.id] = goods.num
	}
	this.saveShops()
}

shopTools.delete = function(id){
	delete shop[id]
	this.saveShops()
}

shopTools.getshop = function(){
	return window.localStorage.getItem('shopInfo') || '{}'
}

//无论什么操作 需要存储
shopTools.saveShops = function(){
	window.localStorage.setItem('shopInfo',JSON.stringify(shop))
}

export default shopTools