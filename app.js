const express = require('express');
const bodyparser = require('body-parser');

const professionalRoutes = require('./routes/professional');

const app = express();


// app.use(bodyparser.urlencoded());//for form data
app.use(bodyparser.json());//application/json

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/professional', professionalRoutes);

app.listen(8080);