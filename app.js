const express=require('express');
const task = require('./Routes/tasks');
const connect=require('./db/connect')
require('dotenv').config()

const app=express()

const port=3000;

const bodyparser=require('body-parser')

//middlewares
app.use(bodyparser.json())
app.use('/api/v1/tasks',task);
app.use(express.static('./public'))

app.use(express.json())


const start=async ()=>{
    try {
        await connect(process.env.MONGO_URI); 
        app.listen(port,console.log("Server is listening to port "+port));
    } 
    catch (error) {
        console.log(error);
    }
}

start(); 





