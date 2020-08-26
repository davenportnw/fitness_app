const express = require('express');
const router = express.Router();

router.get('/jedi', (req,res) => {
    res.send('hello world')
});


module.exports = router;