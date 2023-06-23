const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 7000;

app.get('/', (req, res)=>{
    res.send("<h1>Hello World!</h1>");
})

app.get('/about', (req, res)=>{
    res.send("Hello From About Page");
})


mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.listen(port,()=>{
    console.log(`server run at http://localhost:${port}`);
})