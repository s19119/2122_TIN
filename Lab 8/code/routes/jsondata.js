var express = require('express');
var router = express.Router();

// eslint-disable-next-line no-unused-vars
router.post('/jsondata', function(req,res,next){
    console.log(req.body);
    res.render('jsondata', {data : req.body}); //data format: {Type: "", Name: "", Age: }
});

module.exports = router;