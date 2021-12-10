var express = require('express');
var router = express.Router();

// eslint-disable-next-line no-unused-vars
router.post('/calculate', function(req,res,next){
    console.log(req.body); //data format: {Param1: , Param2: , OperationCode: }
    //operation codes: 0 - add, 1 - sub, 2 - mult, 3 - div
    let param1 = Number.parseFloat(req.body.Param1);
    var param2 = Number.parseFloat(req.body.Param2);
    var operationCode = req.body.OperationCode;
    var result;
    if(param1 && param2){
        if(operationCode == 0){
            result = param1 + param2;            
            res.json({"Result" : result});
        }
        else if(operationCode == 1){
            result = param1 - param2;            
            res.json({"Result" : result});
        }
        else if(operationCode == 2){
            result = param1*param2;            
            res.json({"Result" : result});
        }
        else if(operationCode == 3){
            result = param1/param2;            
            res.json({"Result" : result});
        }
        else{
            res.send('Incorrect operation code');            
        }        
    }
    else{
        res.send('Incorrect parameters');
    } 
    console.log(`Result: ${result}`); 
});

module.exports = router;