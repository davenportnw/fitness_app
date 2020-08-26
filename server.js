const express = require('express');
const app = express()
const path = require('path');

const PORT = 8080;

const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(routes);





app.listen(PORT, () => {
    console.log("App is running on PORT " + PORT);
})
