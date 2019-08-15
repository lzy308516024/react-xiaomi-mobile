import React,{Component} from 'react';
import Swiper from 'swiper'
import {NavLink} from 'react-router-dom'

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
						<NavLink to="/fenlei">
							<img src={require('./img/1.jpg')} alt=""/>
						</NavLink>
					</li>
					<li className = {'swiper-slide'}>
						<NavLink to="/fenlei">
							<img src={require('./img/2.jpg')} alt=""/>
						</NavLink>
					</li>
					
				</ul>
			</div>
		)
	}
}

export default Banner;