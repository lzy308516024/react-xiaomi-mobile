import React,{Component} from 'react';
import './css/index.scss'

class NotFound extends Component {
  render(){
    return (
      <div className = {'not404'}>
        <img src={require('./img/404.png')} alt=""/>
      </div>
    )
  }
}

export default NotFound;
