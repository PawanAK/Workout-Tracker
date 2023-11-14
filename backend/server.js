require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello World'
    });
});

app.listen(process.env.PORT, (req, res) => {
    console.log('listening on port 4000');
});

