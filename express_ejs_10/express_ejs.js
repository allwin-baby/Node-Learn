var express = require('express')
var app= express()
app.set('view engine','ejs')  //check in /views folder//default behaviour 

app.get('/non.ejs',function(req,res){
    res.sendFile(__dirname+'/index.html')   //path must be absolute or specify root to res.sendFile
})
app.get('/ejs',function(req,res){
    res.render('index')  ///index.ejs  X    //check in /views folder//default behaviour 
})
app.get('/ejs_template/:name',function(req,res){
    data = {'age':21}
    res.render('index',{'person':req.params.name,'data':data})  ///index.ejs  X
})
app.listen(3000)

//render for ejs sendFile for html