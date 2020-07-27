import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div className='main-cont'>
                <div id='landing-div'>
                    <div>
                        <p>Treat Yourself</p>
                    </div>
                    <div>
                        <Link to='/menu'><button>Order Now</button></Link>
                    </div>
                </div>
                <div id='landing-slideshow'>
                    
                </div>
            </div>
         );
    }
}
 
export default Home;