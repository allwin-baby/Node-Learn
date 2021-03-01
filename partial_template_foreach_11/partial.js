var express = require('express')
var app =express()
app.set('view engine','ejs')
app.get('/home',function(req,res){
    res.render('home_with_partial') //inside views folder
})
app.get('/index',function(req,res){
    list_of = ['one','two','three']
    res.render('index_with_partials',{'listy':list_of})
})

app.listen(3000)
/*
<% 'Scriptlet' tag, for control-flow, no output
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
*/