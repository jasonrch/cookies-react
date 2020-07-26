require('dotenv').config();
let express = require('express');
let app = express();
let massive = require('massive');
let ctrl = require('./controller');
const session = require('express-session');
const axios = require('axios');
const nodemailer = require('nodemailer');
const cors = require('cors');

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT, ACCOUNT_SID, AUTH_TOKEN} = process.env

const accountSid = ACCOUNT_SID;
const authToken = AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
// bewlow: DigitalOcean middleware !
// app.use(express.static(`${__dirname}/../build`));
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 10000}
}));
app.get('/sendtext',(req, res) => {
    const {user, name, number, address} = req.body;
    const msg = `New order recieved from ${name} (${number})! Address is ${address}`
    client.messages
      .create({body: msg, from: '+16144544724', to: `+1${user}`})
      .then(message => console.log(message.sid));
      res.status(200).send(msg);
})


app.get('/session', ctrl.createUser)
app.post('/session/add', ctrl.addToCart)
app.get('/checkout', ctrl.checkout)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db)
    console.log('db connected !');   }).catch(err => console.log(err))

app.listen(SERVER_PORT, () => console.log(`Server Running on port ${SERVER_PORT} !`));


