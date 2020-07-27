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
                <div>
                    <img className='hidden-img'alt='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' onClick={() => this.setState({mobileNav: !this.state.mobileNav})} />
                    <ul className={`mobile-nav ${this.state.mobileNav ? 'mobile-nav-open' : 'desktop-nav'}`}>
                    <Link className='mobile-links' to='/'>Home</Link>
                    <Link className='mobile-links' to='/menu'>Menu</Link>
                    <Link className='mobile-links' to='/aboutme'>About Me</Link>
                    </ul>
                </div>
                <div className='cake-div'>
                <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                </div>
                <div className='cart-div'>
                <i className="fa fa-shopping-cart"></i>
                </div>
            </div>
         );
    }
}
export default Header;