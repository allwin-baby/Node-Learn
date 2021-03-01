var http = require('http')

var server =http.createServer(function(req,res){
    console.log('request was made'+req.url)
    res.writeHead(200,{'Content-Type':'text/plain'})   //RESPONCE HEADER --status code and content type
    res.end('this is Server')  //content-type :plain text 
})

server.listen(3000,'127.0.0.1');
console.log("listerning to port 3000")