import React, {Component} from 'react';
import './Menu.css';
import {connect} from 'react-redux';
import {getItems} from '../../Redux/cookieReducer';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            option: '',
            items: []
         }
    }
    async componentDidMount(){
       await this.props.getItems();
        // this.setState({
        //     items: this.props.items
        // })
    }
    change(e) {
        console.log(e.target)
    }

    render() { 
        const items = this.props.items.map((elm, index) => {
            return (
                <div className='item-box'>
                    <img src={elm.img} alt='menu item'></img>
                    <p>{elm.title}</p>
                    <span>Description:</span> <br />
                    <p>{elm.description}</p>
                    <span>{elm.price}</span>
                </div>
                )
        })
        return ( 
            <div className='main-cont'>
                <h4>Menu</h4>
                {items}
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getItems})(Menu);