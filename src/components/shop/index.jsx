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
						<a href="/">
							<i className = {'iconfont icon-gouwuche1'}></i>
							<span>购物车</span>
						</a>
						<input className = 'buybtn' type="button" defaultValue = {'立即购买'}/>
					</div>
				</div>
				
			</div>
		)
	}
}

export default Shop;