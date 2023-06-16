const express = require('express');
const app = express();

// JSON enabled
const { json } = require('express');
app.use(json());

// Cors Enabled
const cors = require('cors');
app.use(cors());

// Data base Add--
require('./API/JWTapi');
require("./DB/Connection")
// API add
app.use('/APi', require('./API/JWTapi'));

app.listen(5050, () => {
    console.log('Port Started...')
});

app.use('/', (req, res) => {
    return res.send("backend start....");
})