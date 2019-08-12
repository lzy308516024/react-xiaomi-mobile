import React,{Component} from 'react';
import './css/index.scss'


class Conference extends Component {
	
	render(){
		return (
			<div className = {'conference'}>
				<a href="/"><img src={require('./img/1.jpg')} alt=""/></a>
			</div>
		)
	}
}

export default Conference;