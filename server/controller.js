// const bcrypt = require('bcrypt');
const nodemailer  = require('nodemailer');
let arr2 = [];
module.exports = {
    createUser: (req, res) => {
        if (!req.session.user){
            req.session.user = {
                name: "",
                number: "",
                email: "",
                cart: [],
                total: 0
            }
            res.status(200).send(req.session.user);
        } else {
            res.status(200).send(req.session.user);
        }
    },
    addToCart: (req, res) => {
        const {title, quantity, price, img} = req.body;
        if (!req.session.user){
            req.session.user = {
                name: "",
                number: "",
                email: "",
                cart: [],
                total: 0
            }
        }
        req.session.user.cart.push({title, quantity, price, img});
        res.status(200).send(req.session.user.cart);
    },
    checkout: (req, res) => {
        arr2 = [];
        req.session.user.cart.map((e, i) => {
        let itemTotal = e.price * e.quantity;
        arr2.push(itemTotal)
        })
        let total = arr2.reduce((acc, elm) => {
        return acc += elm;
        }, 0)
        req.session.user.total = total.toFixed(2);
        res.status(200).send(req.session.user);
    },
    email: (req, res) => {
        const {email, name, message} = req.body;
        let emailsender = () => {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'dwrighttt504@gmail.com',
                    pass: 'DWright21'
                }
            })
            
            let mailOptions = {
                from: email,
                to: 'dwrighttt504@gmail.com',
                subject: `New Food Message from ${name}`, // plain text body
                html: message
            }
            
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(data)
                }
            })
        }
        emailsender();
        res.status(200).send(message)
    },
    menu: async (req, res) => {
        const db = req.app.get('db');

        const menuItems = await db.getMenu();

    res.status(200).send(menuItems);
    },
    removeCartItem: (req, res) => {
        const {index} = req.body;
        req.session.user.cart.splice(index, 1);
        res.status(200).send(req.session.user.cart)

    },
    getCart: (req, res) => {
        res.status(200).send(req.session.user.cart)
    }
}