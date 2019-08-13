import React,{Component} from 'react';
import Swiper from 'swiper'

import './index.scss'


class Banner extends Component {

	componentDidMount(){
		let mySwiper = new Swiper('.swiper-container', {
			autoplay: true,//可选选项，自动滑动
		})
	}

	render(){
		return (
			<div className = {'banner swiper-container'}>
				<ul className = {'swiper-wrapper'}>
					<li className = {'swiper-slide'}>
						<a href="/">
							<img src={require('./img/1.jpg')} alt=""/>
						</a>
					</li>
					<li className = {'swiper-slide'}>
						<a href="/">
							<img src={require('./img/2.jpg')} alt=""/>
						</a>
					</li>
					
				</ul>
			</div>
		)
	}
}

export default Banner;