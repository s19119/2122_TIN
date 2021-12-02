var express = require('express');
var router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/hello', function(req,res,next){
    res.send('Hello world!');
});

module.exports = router;