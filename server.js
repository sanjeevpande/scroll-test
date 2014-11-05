var handler = function(req, res) {

    fs.readFile('./index.html', function (err, data) {
        if(err){
            throw err;
        }
        res.writeHead(200);
        res.end(data);
    });
},

app = require('http').createServer(handler),
fs = require('fs');
port = process.env.PORT || 3000;

app.listen(port);

console.log('Server started at port : ' + port);