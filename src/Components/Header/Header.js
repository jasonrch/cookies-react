import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mobileNav: false
         }
    }
    render() { 
        return ( 
            <div id='header-cont'>
                <img alt='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' onClick={() => this.setState({mobileNav: !this.state.mobileNav})} />
                <ul className={`mobile-nav ${this.state.mobileNav ? 'mobile-nav-open' : 'desktop-nav'}`}>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/aboutme'>About Me</Link>
                </ul>
            </div>
         );
    }
}
 
export default Header;