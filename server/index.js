require('dotenv').config();
let express = require('express');
let app = express();
let massive = require('massive');
let ctrl = require('./controller');
const session = require('express-session');
const axios = require('axios');
const nodemailer = require('nodemailer');

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env
// bewlow: DigitalOcean middleware !
// app.use(express.static(`${__dirname}/../build`));
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 }
}));

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



