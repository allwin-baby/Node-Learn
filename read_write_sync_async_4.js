var fs = require('fs')

//read synhronously  [ blocking code]
var readMe = fs.readFileSync('readMe.txt','utf8')  //path,encoding
fs.writeFileSync('writeMe.txt',readMe)
console.log("this message will shown after executing blocking code")


//read asynhronosly  [ non blocking code]
fs.readFile('readMe.txt','utf8',function(err,data){
    console.log("async data is read")
    //BIG MISTAKE IN NODE VIDEO -----writeFile Also have {{{{{{{call back function}}}}}}
    fs.writeFile('writeMe2.txt',data,function(err){   //if you forgot to give callback-Callback must be a function. Received undefined
        console.log(err+" async data is written")
    })
});
console.log("this message will shown before executing non-blocking code")


//-----Sync doesnt have call back mechanism --------------for async its mandatory