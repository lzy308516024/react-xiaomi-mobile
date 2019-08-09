import React,{Component} from 'react';
import './index.scss'


class Banner extends Component {
	
	render(){
		return (
			<div className = {'banner'}>
				<ul>
					<li>
						<a href="/">
							<img src={require('./img/1.jpg')} alt=""/>
						</a>
					</li>
					<li>
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