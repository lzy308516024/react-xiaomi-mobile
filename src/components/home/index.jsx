import React,{Component} from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Header from '../header'
import Banner from '../banner'
import Category from '../category'
import  Recommend from '../recommend'
import  Conference from '../conference'
import  Goods from '../goods'
import  Tabbar from '../tabbar'


class Home extends Component {
  render(){
    return (
      <Router>
            <div className = "app"> 
              <Header></Header>
              <Banner></Banner>
              <Category></Category>
              <Recommend></Recommend>
              <Conference></Conference>
              <Goods></Goods>
              <Tabbar></Tabbar>
            </div>
      </Router>
     
    )
  }
}

export default Home;