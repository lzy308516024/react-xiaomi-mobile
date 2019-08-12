import React,{Component} from 'react';
import './css/index.scss'


class Goods extends Component {
	
	render(){
		return (
			<div className = {'goods'}>
				<ul>
					<li>
						<a href="/">
							<div className = {'goods_shop'}>
								<img src={require('./img/4.jpg')} alt=""/>
							</div>
							<div className={'info'}>
								<p className = {'goods_title'}>小米8 青春版</p>
								<p className = {'goods_des'}>潮流渐变色，自拍旗舰</p>
								<p className={'goods_price'}><span>￥ 3199</span> 起</p>
							</div>
							
						</a>
					</li>
					<li>
						<a href="/">
							<div className = {'goods_shop'}>
								<img src={require('./img/4.jpg')} alt=""/>
							</div>
							<div className={'info'}>
								<p className = {'goods_title'}>小米8 青春版</p>
								<p className = {'goods_des'}>潮流渐变色，自拍旗舰</p>
								<p className={'goods_price'}><span>￥ 3199</span> 起</p>
							</div>
							
						</a>
					</li>
					<li>
						<a href="/">
							<div className = {'goods_shop'}>
								<img src={require('./img/5.jpg')} alt=""/>
							</div>
							<div className={'info'}>
								<p className = {'goods_title'}>小米8 青春版</p>
								<p className = {'goods_des'}>潮流渐变色，自拍旗舰</p>
								<p className={'goods_price'}><span>￥ 3199</span> 起</p>
							</div>
							
						</a>
					</li>
					<li>
						<a href="/">
							<div className = {'goods_shop'}>
								<img src={require('./img/6.jpg')} alt=""/>
							</div>
							<div className={'info'}>
								<p className = {'goods_title'}>小米8 青春版</p>
								<p className = {'goods_des'}>潮流渐变色，自拍旗舰</p>
								<p className={'goods_price'}><span>￥ 3199</span> 起</p>
							</div>
							
						</a>
					</li>
					<li>
						<a href="/">
							<div className = {'goods_shop'}>
								<img src={require('./img/9.jpg')} alt=""/>
							</div>
							<div className={'info'}>
								<p className = {'goods_title'}>小米8 青春版</p>
								<p className = {'goods_des'}>潮流渐变色，自拍旗舰</p>
								<p className={'goods_price'}><span>￥ 3199</span> 起</p>
							</div>
							
						</a>
					</li>
					<li>
						<a href="/">
							<div className = {'goods_shop'}>
								<img src={require('./img/10.jpg')} alt=""/>
							</div>
							<div className={'info'}>
								<p className = {'goods_title'}>小米8 青春版</p>
								<p className = {'goods_des'}>潮流渐变色，自拍旗舰</p>
								<p className={'goods_price'}><span>￥ 3199</span> 起</p>
							</div>
							
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default Goods;