const { query } = require('express')
var express = require('express')
var app =express()
app.set('view engine','ejs')

//  get with query string   --actually query strings are used with GET!!!!!!!
//  1.  paste http://127.0.0.1:3000/form?name=allwin&age=12  and submit
//  2.  paste http://127.0.0.1:3000/form   enter data   and submit
app.get('/form',function(req,res){
    res.render('form',{qs:req.query}) //inside views folder
})
app.get('/submit',function(req,res){
    res.render('submit',{qs:req.query}) //inside views folder
})
app.listen(3000)

