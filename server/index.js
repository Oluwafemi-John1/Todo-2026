const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
app.use(cors)
app.use(express.json());

const serverPort = process.env.PORT || 5643

app.get('/', (req,res)=>{
    res.json({'message': "I am running fine"})
})

app.listen(serverPort, ()=>{
    console.log(`Lift off!!! server is running at ${serverPort}`);
})