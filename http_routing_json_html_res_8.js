
var http = require('http')
var fs = require('fs')
var server = http.createServer(function (req, res) {

    if (req.url === '/') {
        res.writeHead(200, { 'Content_type': 'text/html' })
        //reminder --- createReadStream has no call back but it has on event function
        fs.createReadStream('home.html',).pipe(res)
        //res.end('home.html') ///just plain text even  with Content_type':'text/html'
    }
    if (req.url === '/json') {
        object = [{
            'name': 'allwin',
            'age': 23
        }]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(object))     ///    becuse res.end express a string       JSON not json.str
    }
    else{
        res.writeHead(404,{ 'Content_type': 'text/plain' })
        res.end('404') 
    }
})
server.listen(3000, '127.0.0.1')
console.log("server started")