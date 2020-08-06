import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fullName: '',
            email: '',
            message: ''
         }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    sendMsg(event){
        event.preventDefault();
    }
    createNotification = (type) => {
        return () => {
          switch (type) {
            case 'info':
              NotificationManager.info('Message Sent!');
              break;
            case 'success':
              NotificationManager.success('Success message', 'Title here');
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
                <p>New Orleans style cookies with a twist!</p>
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
                        <input placeholder='Full Name' name='fullName' onChange={(e) => this.handleChange(e) } /> <br />
                        <input placeholder='Email' name='email' onChange={(e) => this.handleChange(e) } /> <br />
                        <input placeholder='Message' name='message' type='textarea' onChange={(e) => this.handleChange(e) } /> <br />
                        <button className='btn btn-info info-btn' onClick={this.createNotification('info')}>Send Message</button>
                    </form>
                </div>
                <NotificationContainer/>
            </div>
         );
    }
}
 
export default Home;