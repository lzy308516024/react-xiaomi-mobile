export default function(state={},action){
	let goods = action.data
	switch(action.type){
		case 'CART_ADD':
			return 'CART_ADD_123';
		case 'CART_DEL':
			return 'CART_DEL_456'
		case 'CART_GOODS_NUM':
			return 'CART_GOODS_NUM'
		default:
			return '所有商品信息'
	}
}