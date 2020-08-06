import React, {Component} from 'react';
import './Items.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quantity: 6
         }
    }
   async addToCart(type){
    const {title, price, img} = this.props.elm;
    const {index} = this.props;
    
    const {quantity} = this.state;
    console.log(title, price, quantity, img);
        await axios.post('/session/add', {title, quantity, price, img});
    
        switch (type) {
          case 'info':
            NotificationManager.info('Message Sent!');
            break;
          case 'success':
            NotificationManager.success('', 'Item added to cart', 2000);
            break;
          case 'warning':
            NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
            break;
          case 'error':
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
              alert('callback');
            });
            break;
            default: console.log('No Message')
            break;
      }
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
                        <br /> <button  className='btn btn-success info-btn' onClick={() => this.addToCart('success')}>Add To Cart</button> <br />
                        <span className='alert-success'> </span>
                    </div>
                    <NotificationContainer/>
                </div>
         )
    }
}
 
export default Items;