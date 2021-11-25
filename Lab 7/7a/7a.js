var http = require('http');
const url = require('url');
const port = 8080;

var server = http.createServer(function (req,res){
    const urlOp = url.parse(req.url,true);
    const path = urlOp.pathname;
    const param1 = Number(urlOp.query.param1);
    const param2 = Number(urlOp.query.param2);
    let result = 0;
    if(param1 && param2){
        if(path === '/add'){
            result = param1+param2;
        }
        else if(path === '/sub'){
            result = param1-param2;
        }
        else if(path === '/mul'){
            result = param1*param2;
        }
        else if(path === '/div'){
            result = param1/param2;
        }
        else{
            res.writeHead(400,{'Content-Type' : 'text/html'});
            res.end('<html>'+
                '<body>' +
                    '<p>Please specify the correct path (add, sub, mul or div)</p>'+
                '</body>'+
            '</html>');
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(`<html>` +
                    `<body>` +
                         `<p>Request parameters: ${param1} ${param2}, result: ${result}</p>`+ 
                    `</body>` +
        `</html>`);
    }
    else{
        res.writeHead(400,{'Content-Type' : 'text/html'});
        res.end('<html>'+
        '<body>' +
            '<p>Please provide the correct parameters (2 numbers)</p>'+
        '</body>'+
    '</html>');
    }
});

server.listen(port);