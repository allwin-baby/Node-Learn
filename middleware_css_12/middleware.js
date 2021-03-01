
// <link rel="stylesheet" href="/assests/style.css">   is used in ejs file to add style sheet.
// but  it will show 404 error cant be processed by node
// so we use a middle ware to process these requests (images and stylesheet)
//  request---------------->middleware------------------->response

/*
        request
app.get('/',function(req,res){
            !!!!!!!!!!!!!!!!! middleware !!!!!!!!!
    res.render('home') //inside views folder  ---> responce
})
app.listen(3000)


*/
var express = require('express')
var app =express()
app.set('view engine','ejs')

//--------------------YHIS CODE WILL FIRE FOR EVERY REQUEST  becuse it begins with /  every url has  / -------------------------------
app.use('/',function(req,res,next){
    console.log(req.url)    
    next()  //goto next url having /
})

//-----------------------------------------------------------
app.use('/assets',express.static('assets'))  //full path dont work

app.get('/',function(req,res){
    res.render('home') //inside views folder
})
app.get('/home',function(req,res){
    res.render('home') //inside views folder
})
app.get('/home1',function(req,res){
    res.render('home') //inside views folder
})
app.get('/home2',function(req,res){
    res.render('home') //inside views folder
})
app.listen(3000)

