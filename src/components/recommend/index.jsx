import React,{Component} from 'react';
import './css/index.scss'


class Recommend extends Component {
	
	render(){
		return (
			<div className = {'recommend'}>
				<div className = {'left'}>
					<img src={require('./img/1.jpg')} alt=""/>
				</div>
				<div className = {'right'}>
					<div><img src={require('./img/2.jpg')} alt=""/></div>
					<div><img src={require('./img/3.jpg')} alt=""/></div>
				</div>
			</div>
		)
	}
}

export default Recommend;