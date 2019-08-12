import React,{Component} from 'react';
import Header from './components/header'
import Banner from './components/banner'
import Category from './components/category'
import 	Recommend from './components/recommend'
import 	Conference from './components/conference'
import 	Goods from './components/goods'
import 	Tabbar from './components/tabbar'
import  Shop from './components/shop'

class App extends Component {
  render(){
    return (
      <div className = "app"> 
      	<Header></Header>
    		<Banner></Banner>
    		<Category></Category>
    		<Recommend></Recommend>
    		<Conference></Conference>
    		<Goods></Goods>
    		<Tabbar></Tabbar>
        <Shop></Shop>
      </div>
    )
  }
}

export default App;
