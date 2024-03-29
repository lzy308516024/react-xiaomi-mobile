import React,{Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/home'
import NotFound from './components/notfound'
import Shopcart from './components/shopcart'
import Cart from './components/cart'
import My from './components/my'


class App extends Component {
  render(){
    return (
      <Router>
            <div className = "app"> 
              <Switch>
                <Route exact path = {'/'} component = {Home} />
                <Route path = {'/cart'} component = {Cart} />
                <Route path = {'/my'} component = {My} />
                <Route path = {'/fenlei'} component = {Shopcart} />
                <Route component = {NotFound} />
              </Switch>
              
            </div>
      </Router>
     
    )
  }
}

export default App;
