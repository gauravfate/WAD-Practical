const express = require('express')

const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/public/about.html');
});

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html');
});

app.listen(port);