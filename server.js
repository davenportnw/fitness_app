const express = require('express');
const app = express()
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');


const db = require('./models');


const PORT = 8080;


const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
});

app.use(express.static('public'));
app.use(routes);




app.listen(PORT, () => {
    console.log("App is running on PORT " + PORT);
})
