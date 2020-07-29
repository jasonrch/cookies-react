import React, {Component} from 'react';
import './CartItem.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getCart, getTotal} from '../../Redux/cookieReducer';
import {Link} from 'react-router-dom';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quantity: this.props.elm.quantity
         }
    }
   async addToCart(){
    const {title, price, img} = this.props.elm;
    const {quantity} = this.state;
    console.log(title, price, quantity, img);
        await axios.post('/session/add', {title, quantity, price, img});
        
    }
   async removeItem(){
        const {index} = this.props;
        await axios.delete('/removeCartItem', {index})
        await this.props.getCart();
        await this.props.getTotal();
    }
    render() { 
        return ( 
            <div className='item-cont-cart'>
                    <div className='item-box-cart'>
                        <img src={this.props.elm.img} alt='menu item'></img>
                        <div style={{"fontSize":"13px"}}>
                            <span>*View Nutrtion Facts <Link to='/nutrtion-guide'>Here</Link> !</span>
                        </div>
                    </div>
                    <div className='item-box-cart'>
                        <div style={{"padding":"10px"}} className='flex-cont'>

                            <div>
                                <span>Name:</span>
                                <p>{this.props.elm.title}</p>
                            </div>
                            <div>
                                <span>Price:</span> <br />
                                <p>{this.props.elm.price}/ each</p>
                            </div>
                            <div>
                                <span>Quantity: {this.state.quantity}</span>
                                <br /> <button className='cart-remove-button'onClick={() => this.removeItem()}>Remove Item</button>
                            </div>
                        </div>
                        <div id='cart-ingredients'>
                            <span>Ingredients: </span> <span>Protein: 3.6g 7 % Sugars: 25g Vitamin A: 258IU Vitamin C: 
                            0mg Calcium: 24mg Iron: 1mg Thiamin: 0mg Niacin: 2mg Vitamin B6: 0mg Magnesium: 
                            29mg Folate: 38mcg</span>
                        </div>
                    </div>
                </div>
         )
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getCart, getTotal})(CartItem);