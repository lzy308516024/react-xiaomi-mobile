import React,{Component} from 'react';
import {connect} from 'react-redux'
import {addCart} from '../../actions/cart'
import {Link} from 'react-router-dom'
import './css/index.scss'

@connect(
	state => ({shop:state}),
	{addCart}
)

class Shop extends Component {
	state = {
		data:{},
		num:1
	}
	addToCart = () => {
		let {num} = this.state
		num && (
			addCart({
				id:19,
				num
			})
		)
		console.log('提交到购物车')
	}
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
				<div className="section-detail">
					<div className="ul-box">
						<ul>
							<li>
								<div className = {'img-box'}>
									<img src={require('./img/ia_10003.png')} alt=""/>
								</div>
								<p>CPU</p>
								<p>骁龙845八核</p>
							</li>
							<li>
								<div className = {'img-box'}>
									<img src={require('./img/ia_10003.png')} alt=""/>
								</div>
								<p>CPU</p>
								<p>骁龙845八核</p>
							</li>
							<li>
								<div className = {'img-box'}>
									<img src={require('./img/ia_10003.png')} alt=""/>
								</div>
								<p>CPU</p>
								<p>骁龙845八核</p>
							</li>
							<li>
								<div className = {'img-box'}>
									<img src={require('./img/ia_10003.png')} alt=""/>
								</div>
								<p>CPU</p>
								<p>骁龙845八核</p>
							</li>
							<li>
								<div className = {'img-box'}>
									<img src={require('./img/ia_10003.png')} alt=""/>
								</div>
								<p>CPU</p>
								<p>骁龙845八核</p>
							</li>
							<li>
								<div className = {'img-box'}>
									<img src={require('./img/ia_10003.png')} alt=""/>
								</div>
								<p>CPU</p>
								<p>骁龙845八核</p>
							</li>	
						</ul>
					</div>
					
				</div>
				<div className="section-detail detail">
				</div>
				<div className="footbar">
					<div className="footer">
						<a href="/" >
							<i className = {'iconfont icon-home1'}></i>
							<span>首页</span>
						</a>
						<a href="javascript:void(0)" onClick = {this.addToCart}>
							<i className = {'iconfont icon-gouwuche1'}></i>
							<span>加入购物车</span>
						</a>
						<Link to ='cart' className = 'buybtn'>立即购买</Link>
					</div>
				</div>
				
			</div>
		)
	}
}

export default Shop;