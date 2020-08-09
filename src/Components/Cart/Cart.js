import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCart, getTotal} from '../../Redux/cookieReducer';
import Loading from '../Loading/Loading';
import CartItem from '../CartItem/CartItem';
import './Cart.css';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: true
        }
        this.alert = this.alert.bind.this;
    }
    async componentDidMount(){
        await this.props.getCart()
        await this.props.getTotal();
        this.setState({
            cart: this.props.cart
        })
    }
    alert(){
        this.setState({
            alert: false
        })
    }
    render() { 
        const items = this.props.user.cart.map((elm, index) => {
            return <CartItem key={index} elm={elm} index={index} />
        })
        
        console.log(this.props);
        return ( 
            this.props.user.cart.length === 0 ? <Loading /> : 
            
            <div style={{"min-height": "95vh"}}>
                <div id='total-div'>
                    <span id='menu-h4'>Items In Cart</span>
                    <span id='total-price'>Total Price: ${this.props.user.total}</span>
                </div>
                <div className='flex-cont'>
                    {items}
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getCart, getTotal})(Cart); 