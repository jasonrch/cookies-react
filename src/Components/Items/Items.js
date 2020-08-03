import React, {Component} from 'react';
import './Items.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quantity: 6
         }
    }
   async addToCart(){
    const {title, price, img} = this.props.elm;
    const {index} = this.props;
    
    const {quantity} = this.state;
    console.log(title, price, quantity, img);
        await axios.post('/session/add', {title, quantity, price, img});
    let alertDiv = document.getElementsByClassName('alert-success')[index]
    alertDiv.innerText='Item Added to Cart !';
    setTimeout(() => {
        alertDiv.innerText = ''
    }, 3000);
    }
    
    render() { 
        return ( 
            <div className='item-cont'>
                    <div className='item-box'>
                        <img src={this.props.elm.img} alt='menu item'></img>
                        <div style={{"fontSize":"13px"}}>
                            <span>*View Nutrtion Facts <Link to='/nutrtion-guide'>Here</Link> !</span>
                        </div>
                    </div>
                    <div className='item-box'>
                        <span>Name:</span>
                        <p>{this.props.elm.title}</p>
                        <span>Price:</span> <br />
                        <p>{this.props.elm.price}/ each</p>
                        <button className={this.state.quantity === 6 ? 'buttonClose' : 'buttonOpen'} onClick={() => this.setState({quantity: this.state.quantity - 1})}>-</button>
                        <span>{this.state.quantity}</span>
                        <button className={this.state.quantity === 36 ? 'buttonClose' : 'buttonOpen'} onClick={() => this.setState({quantity: this.state.quantity + 1})}>+</button>
                        <br /> <button onClick={() => this.addToCart()}>Add To Cart</button> <br />
                        <span className='alert-success'> </span>
                    </div>
                </div>
         )
    }
}
 
export default Items;