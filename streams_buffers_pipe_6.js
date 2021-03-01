//fs.readFile read whole data at once and store in memory;after loading whole data it will fire the call back function
//steams  splits data into chunks and each chunk fire a call back function.

//--------------------------------------------------------------------------------
var fs = require('fs')
var myReadStream =fs.createReadStream(__dirname+'/signal-desktop-win-1.39.4.exe')
var myWriteStream = fs.createWriteStream(__dirname+"/writeStream.exe")
//--------------------------------------------------------------------------------


//method 1:manualy listening to each chunk and write it
//--------------------------------------------------------------------------------
//each time readable stream read a chunk of data it will emit event called'data' because it inherit from EventEmitter object
myReadStream.on('data',function(chunk,err){  //'chunck' :original chunk of stream  'data': is the event
    console.log("new chink recieved")
    console.log(chunk)
    myWriteStream.write(chunk)
})  //why readStream not asking about in what format we read like utf8 in readFileSync and readFile
//--------------------------------------------------------------------------------
//method 2: Piping
var myReadStream2 =fs.createReadStream(__dirname+'/signal-desktop-win-1.39.4.exe')
myReadStream.pipe(myWriteStream)
console.log("this non blocing code!!!")

//-----------------------------------------------------------------------------------------------------------------------------------
//difference bw readFile and createReadStream is one is non blocking code and another is chunk data process 