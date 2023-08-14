const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

dotenv.config({path: './.env'});
require('./db/conn');
const port = process.env.PORT;

const Users = require('./models/userSchema');

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
 
app.get('/', (req,res)=>{
    res.send("hello");
})
//register
app.post('/register', async (req, res)=>{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username: username,
            email: email,
            password: password
        });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    } catch (error) {
        res.status(400).send(error)
    }
})
//login 
app.post('/login', async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        //  if Exist
        const user = await Users.findOne({email : email});
        if(user){
            // Verify Password 
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                // Generate Token Which is Define in User Schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Expires Token in 24 Hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("Logged In")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.get('/logout', (req, res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("User Logged Out")
})

app.listen(port, ()=>{
    console.log("Server is listening")
})