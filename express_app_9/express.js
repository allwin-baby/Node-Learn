/*
var http = require('http')
var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(404,{ 'Content_type': 'text/plain' })
        res.end('404') 
    }
})
server.listen(3000, '127.0.0.1')
console.log("server started")*/

var express = require('express')  //express now constain a function
var app = express()  //we are firing that function so app get all methods that contained in it

app.get('/',function(req,res){
    res.send('404') //res.end('404') in http
})



///request paramters------------------------------------
app.get('/profile/:id',function(req,res){
    res.send(`you searched for profile id  ${req.params.id}`)
})

app.get('/contact/:name',function(req,res){
    res.send(`you searched for contact name  ${req.params.name}`)
})
app.listen(3000)
