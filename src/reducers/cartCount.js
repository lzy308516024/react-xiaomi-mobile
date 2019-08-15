import  shopTools from '../util/shoptools'

// 事件交互  所改变的状态 都交给redux处理
export default function(state={},action){
	let goods = action.data
	switch(action.type){
		case 'CART_ADD':
			shopTools.addUpdate(goods.data)
			return shopTools.getshop()
			
		case 'CART_DEL':
			shopTools.delete(goods)
			return shopTools.getshop()

		case 'CART_GOODS_NUM':
			return shopTools.getshop()

		default:
			return shopTools.getshop()

	}
} 