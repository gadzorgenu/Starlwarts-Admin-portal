const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const BodyParser = require('body-parser')

// init app
const app =express();

//setting up mongoose
mongoose.connect("mongodb://localhost:27017/adminInfo", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));
//middleware for data
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });
// for cross communication
app.use(Cors())

//Routes



app.listen(5000, () => console.log('server started'));