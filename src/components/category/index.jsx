import React,{Component} from 'react';
import './css/index.scss'


class Category extends Component {
	
	render(){
		return (
			<div className = {'category'}>
				<a href="/"><img src={require('./img/1.png')} alt=""/></a>
				<a href="/"><img src={require('./img/2.png')} alt=""/></a>
				<a href="/"><img src={require('./img/3.png')} alt=""/></a>
				<a href="/"><img src={require('./img/4.png')} alt=""/></a>
				<a href="/"><img src={require('./img/5.png')} alt=""/></a>
				<a href="/"><img src={require('./img/6.png')} alt=""/></a>
				<a href="/"><img src={require('./img/7.png')} alt=""/></a>
				<a href="/"><img src={require('./img/8.png')} alt=""/></a>
				<a href="/"><img src={require('./img/9.png')} alt=""/></a>
				<a href="/"><img src={require('./img/10.png')} alt=""/></a>
			</div>
		)
	}
}

export default Category;