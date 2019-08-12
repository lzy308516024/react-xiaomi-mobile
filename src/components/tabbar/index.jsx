import React,{Component} from 'react';
import './css/index.scss'


class Tabbar extends Component {
	
	render(){
		return (
			<div className = {'tabbar'}>
				<ul>
					<li>
						<a href="/" className = {'active'}>
							<i className = {'iconfont icon-home1'}></i>
							<span>首页</span>
						</a>
					</li>
					<li>
						<a href="/">
							<i className = {'iconfont icon-fenlei1'}></i>
							<span>分类</span>
						</a>
					</li>
					<li>
						<a href="/">
							<i className = {'iconfont icon-gouwuche1'}></i>
							<span>购物车</span>
						</a>
					</li>
					<li>
						<a href="/">
							<i className = {'iconfont icon-wode2'}></i>
							<span>我的</span>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default Tabbar;