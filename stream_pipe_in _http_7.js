//Http[ RESPONCE AS STREAM AND PIPES]
//|||||||||||||||||     res is a writable stream    ||||||||||||||||||||||

var http = require('http')
var fs = require('fs')

var server =http.createServer(function(req,res){
    console.log('request was made'+req.url)
    res.writeHead(200,{'Content-Type':'text/plain'})   //application/x-msdownload  ;no use ||what is header content-type for exe files???

    var myReadStream =fs.createReadStream(__dirname+'/signal-desktop-win-1.39.4.exe')
    //var myWriteStream = fs.createWriteStream(__dirname+"/writeStream.exe") //res is the write stream
    //res.end('this is Server')  //piping,so non need 
    myReadStream.pipe(res) //res is a writable stream!!!!
    
})

server.listen(3000,'127.0.0.1');
console.log("listerning to port 3000")