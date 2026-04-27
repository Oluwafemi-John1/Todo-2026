const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
require('./connection');

const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

const serverPort = process.env.PORT || 5643;

app.get('/', (req, res) => {
    res.send({ message: 'I am running fine' });
});

app.use('/api/auth', authRoutes);

app.listen(serverPort, () => {
    console.log(`Lift off!!! server is running at ${serverPort}`);
});