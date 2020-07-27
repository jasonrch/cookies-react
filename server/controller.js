// const bcrypt = require('bcrypt');
const nodemailer  = require('nodemailer');

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
        const {name, quantity, price} = req.body;

        req.session.user.cart.push({name, quantity, price});
        res.status(200).send(req.session.user);
    },
    checkout: (req, res) => {
        let arr2 = [];
        req.session.user.cart.map((e, i) => {
        let itemTotal = e.price * e.quantity;
        arr2.push(itemTotal)
        })
        let total = arr2.reduce((acc, elm) => {
        return acc += elm;
        }, 0)
        req.session.user.total = total;
        res.status(200).send(req.session.user);
    },
    email: (req, res) => {
        const {email, username} = req.body;
        let emailsender = () => {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'dwrighttt504@gmail.com',
                    pass: 'DWright21'
                }
            })
            
            let mailOptions = {
                from: 'dwrighttt504@gmail.com',
                to: email,
                subject: "Signup Completed! ✔", // plain text body
                html: `<h1>Hello ${username} !</h1>
                    <p>This is an automated message from Darth Vader, "I am your father now !"</p>
                    <p>No, but seriously welcome to my site!</p>
                    <a href="http://68.183.132.10:4000/#/admin">Jobbly</a>
                    <h5>email: admin1@gmail.com</h5>
                    <h5> password: admin1</h5>
                `, // html body
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
    },
    menu: async (req, res) => {
        const db = req.app.get('db');

        const menuItems = await db.getMenu();

    res.status(200).send(menuItems);
    }
}