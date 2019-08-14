// export const configstore = createStore();
import {createStore} from 'redux'
import Reducers from '../reducers'

export default function(init){
	// init 参数是state的初始值
	const store = createStore(
		Reducers,
		init,
		//调试工具
		window.devToolsExtension?window.devToolsExtension():undefined
	)
	return store
}