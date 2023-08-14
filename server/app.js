const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

dotenv.config({path: './.env'});
require('./db/conn');

app.get('/', (req,res)=>{
    res.send("hello");
})

app.listen(3001, ()=>{
    console.log("Server is listening")
})