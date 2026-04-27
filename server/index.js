const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json());
require('./connection')

const serverPort = process.env.PORT || 5643

app.get('/', (req, res) => {
    res.send({ 'message': "I am running fine" })
})

app.get('/test', async (req, res) => {
    const Test = mongoose.model('Test', new mongoose.Schema({ name: String }));
    await Test.create({ name: 'hello todo2026' });
    res.json({ message: 'Saved successfully!' });
});

app.listen(serverPort, () => {
    console.log(`Lift off!!! server is running at ${serverPort}`);
})