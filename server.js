const express = require('express');
const app = express()

const PORT = 8080;


const routes = require('./routes/routes');
app.use(routes);


app.get('/jedi', (req,res) => {
    res.send('hello world')
});



app.listen(PORT, () => {
    console.log("App is running on PORT " + PORT);
})
