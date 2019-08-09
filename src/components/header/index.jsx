import React,{Component} from 'react';
import './index.scss'


class Header extends Component {
	
	render(){
		return (
			<header className = {'index_top'}>
          	 <div className = {'logo'}>
          	 	<img src={require('./img/logo.png')} width = {'100%'} height = {'100%'} alt="logo"/>
          	 </div>
          	 <div className = {'search '}>
				<i className = {'iconfont icon-search'}></i>
				<span>搜索商品名称</span>
          	 </div>
          	 <div className = {'login iconfont icon-wode1'}></div>
          </header>
		)
	}
}

export default Header;