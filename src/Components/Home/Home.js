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
            Name: '',
            Email: '',
            Message: '',
            NameInp: true,
            EmailInp: true,
            MessageInp: true
         }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createNotification = (event) => {
        const {Name, Email, Message} = this.state;
        const inpName = document.getElementById('inpName');
        const inpEmail = document.getElementById('inpEmail');
        const inpMessage = document.getElementById('inpMessage');      
        if (/[a-z]{3}/.test(Name) === false && /[a-z0-9]{3,50}@[a-z]{3,7}.[a-z]{2,3}/.test(Email) === false && /[a-z]{1,500}/.test(Message) === false){
        return this.setState({
            NameInp: false,
            EmailInp: false,
            MessageInp: false
        })    
        } else if (/[a-z]{3}/.test(Name) === false && /[a-z0-9]{3,50}@[a-z]{3,7}.[a-z]{2,3}/.test(Email) === false && /[a-z]{1,500}/.test(Message) === true){
            return this.setState({
                MessageInp: false
            })  
        } else if (/[a-z]{3}/.test(Name) === false && /[a-z]{1,500}/.test(Message) === false && /[a-z0-9]{3,50}@[a-z]{3,7}.[a-z]{2,3}/.test(Email) === true){
            return this.setState({
                EmailInp: false
            })  
        } else if (/[a-z]{3}/.test(Name) === false && /[a-z0-9]{3,50}@[a-z]{3,7}.[a-z]{2,3}/.test(Email) === true && /[a-z]{1,500}/.test(Message) === true){
            return this.setState({
                EmailInp: false,
                MessageInp: false
            }) 
        } else if(/[a-z0-9]{3,50}@[a-z]{3,7}.[a-z]{2,3}/.test(Email) === false && /[a-z]{1,500}/.test(Message) === false && /[a-z]{3}/.test(Name) === true){
            return this.setState({
                NameInp: false
            }) 
        }
        axios.post('email', {Name, Email, Message})
        event.preventDefault();
        inpName.value = '';
        inpEmail.value = '';
        inpMessage.value = '';
        NotificationManager.info("We'll be in touch", 'Message Sent!', 2000);
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
                <p>Cookies and baked goods that are a JOY to eat!</p>
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
                    <h4 style={{'marginBottom':"5px"}}>Contact Us</h4>
                    <p style={{'marginTop':"0"}}>What's on your mind?</p>
                    <form>
                        <input id='inpName' placeholder='Name' name='Name' onChange={(e) => this.handleChange(e) } /> <br />
                        <input id='inpEmail' placeholder='Email' name='Email' onChange={(e) => this.handleChange(e) } /> <br />
                        <input id='inpMessage' placeholder="I loved your chocolate chip cookies!" name='Message' type='textarea' onChange={(e) => this.handleChange(e) } /> <br />
                        <button className='btn btn-info info-btn' onClick={(event) => this.createNotification(event)}>Send Message</button>
                    </form>
                </div>
                <NotificationContainer/>
            </div>
         );
    }
}
 
export default Home;