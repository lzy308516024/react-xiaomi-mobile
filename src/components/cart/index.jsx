import React,{Component} from 'react';
import './css/index.scss'
import Header from '../header'
import {connect} from 'react-redux'
import {addCart} from '../../actions/cart'

@connect(
	state => ({shop:state}),
	{addCart}
)



class Cart extends Component {
	constructor(props){
		super(props);
		this.state = {
			number:0,
			sum:0,
			price:1900
		}

		this.handlesub = this.handlesub.bind(this);
		this.handleadd = this.handleadd.bind(this);
	}
	handlesub(){
		
		let number  = this.state.number
			number--
		let sum = number*this.state.price
		this.state.number && this.setState({
				number:number,
				sum:sum
		})
	}

	handleadd(){
		let number  = this.state.number
			number = number+1
		let sum = number*this.state.price
		this.setState({
			number: number,
			sum:sum
		})
		
	
	}


	render(){

		return (
			<div className = {'cart'}>
				<Header></Header>
				<div className={'cart-box'}>
					<div className="chk">
						<input type="checkbox"/>
					</div>
					<div className = {'goodsImg'}> <img src={require('./img/1.jpg')} alt=""/></div>
					<div className = {'goodsInfo'}>
						<div className={"name"}>小米CC9 6GB +64GB 白色恋人（白色）</div>
						<div className="price-without">
							<span data-v-5c6b2c62="">售价：</span>
							<span data-v-5c6b2c62="">{this.state.price}元</span>
						</div>
						<div className="num">
							<div className="input-number">
								<div className="input-sub" onClick ={this.handlesub} >
									<i className = {'iconfont icon-jianhao1'}></i>
								</div>
								<div className="input-num">
									<span>{this.state.number}</span>
								</div>
								<div className="input-add" onClick = {this.handleadd}>
									<i className = {'iconfont icon-jiahao1'}></i>
								</div>
							</div>
							<div className="delete"></div>
						</div>
					</div>
				</div>
				<div className="bottom-submit">
					<div className="box-flex">
						<div className="price-box">
							<div className = {'title'}>共<span>{this.state.number}</span>件  金额：</div>
							<div> <span className = {'last_price'}>{this.state.sum}</span>元</div>
						</div>
						<div className = {'buymore'}>
							继续购物
						</div>
						<div className="buy">
							结算
						</div>
					</div>
				</div>

				
			</div>
		)
	}
}

export default Cart;