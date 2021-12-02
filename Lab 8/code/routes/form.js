var express = require('express');
var router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/form', function(req,res,next){
    // eslint-disable-next-line no-undef
    res.send('<html>' +
            '<body>'+
                '<form action="http://localhost:3000/formdata" method="POST">'+
                    '<label for="firstname">First name:</label><br>'+
                    '<input type="text" id="firstname" name="firstname"><br>'+
                    '<label for="lastname">Last name:</label><br>'+
                    '<input type="text" id="lastname" name="lastname"><br>'+
                    '<label for="city">City:</label><br>'+
                    '<input type="text" id="city" name="city"><br>'+
                    '<input type="submit" value="Submit">'+
                '</form>'+
        '</body>'+
    '</html>');
});

// eslint-disable-next-line no-unused-vars
router.post('/formdata', function(req,res,next){
    console.log(req.body);
   res.render('formdata', {firstName: req.body.firstname, lastName: req.body.lastname, city: req.body.city});
});

module.exports = router;