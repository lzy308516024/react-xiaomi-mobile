import React,{Component} from 'react';
import Header from './components/header'
import Banner from './components/banner'

class App extends Component {
  render(){
    return (
      <div className = "app"> 
      	<Header></Header>
		<Banner></Banner>
      </div>
    )
  }
}

export default App;
