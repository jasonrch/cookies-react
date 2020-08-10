import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            message: ''
         }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createNotification = (event) => {
        const {name, email, message} = this.state;
        axios.post('email', {name, email, message})
        event.preventDefault();
        NotificationManager.info('Message Sent!', 2000);
    }
    render() { 
        console.log(this.state);
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
                <p>Cookies and baked good that are a JOY to eat!</p>
                <div id='landing-slideshow'> 
                    
                </div>
                
                <div id='info-box'>
                    <div>
                    <h4>Hours Of Operation</h4>
                    <address>
                    Monday 7:30 am - 7:00 pm <br />
                    Tuesday 7:30 am - 7:00 pm <br />
                    Wednesday 7:30 am - 7:00 pm <br />
                    Thursday 7:30 am - 7:00 pm <br />
                    Friday 7:30 am - 7:00 pm <br />
                    Saturday 7:30 am - 7:00 pm <br />
                    Sunday Closed
                    </address>
                </div>
                </div>
                <div id='contact-form'>
                    <h4>Contact Us</h4>
                    <p>What's on your mind?</p>
                    <form>
                        <input placeholder='name' name='name' onChange={(e) => this.handleChange(e) } /> <br />
                        <input placeholder='email' name='email' onChange={(e) => this.handleChange(e) } /> <br />
                        <input placeholder="I loved your chocolate chip cookies! Is there any way I can order ahead for a party I'm hosting?" name='message' type='textarea' onChange={(e) => this.handleChange(e) } /> <br />
                        <button className='btn btn-info info-btn' onClick={(event) => this.createNotification(event)}>Send Message</button>
                    </form>
                </div>
                <NotificationContainer/>
            </div>
         );
    }
}
 
export default Home;