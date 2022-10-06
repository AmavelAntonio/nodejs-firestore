const express = require('express');
const cors = require('cors'); 
const router = require('./routes/routes')
const conect = require('./config/conect');


const app = express(); 
const port = 6000; 

app.use(cors());
app.use(express.json());


app.listen(port, ()=> {
    console.log("Server is running");
})