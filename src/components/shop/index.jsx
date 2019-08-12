import React,{Component} from 'react';
import './css/index.scss'


class Shop extends Component {
	
	render(){
		return (
			<div className = {'shop'}>
				<div className="shopdetatils">
					<img src={require('./img/ia_10001.jpg')} alt=""/>
				</div>
				<div className={'overview-goods-name'}>
						小米8 屏幕指纹版
				</div>
				<div className="section-detail">
					<div className="overview-goods-brief">
						<font color="#ff4a00">「6GB+128GB 特惠价1799元，享花呗分期6期免息」</font>
						全新升级小米9十大功能 / 骁龙845处理器 / 全球首款压感屏幕指纹 / 四曲面渐变镜面机身 / 960帧超慢动作 / 手持超级夜景
					</div>
				</div>
				<div className={"goods-price"}>
					<div className="price">
						<span>￥</span>
						1799
					</div>
					<div className= {'origin-price'}>
						2999
					</div>
				</div>
				
			</div>
		)
	}
}

export default Shop;