import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            option: ''
         }
    }
    change(e) {
        console.log(e.target)
    }
    render() { 
        return ( 
            <div className='main-cont'>
                
            </div>
         );
    }
}
 
export default Menu;