const { query } = require('express')
var bodyParser  = require('body-parser')
var express = require('express')
var app =express()
app.set('view engine','ejs')

//middle ware  exclusingvely for pasing """POST REQUESTS"""
//Parse incoming request bodies in a middleware before your handlers, available under the ****req.body**** property.
var urlencodedParser =  bodyParser.urlencoded({extended :false})

app.get('/form',function(req,res){
    res.render('form',) 
})
app.post('/form',urlencodedParser,function(req,res){   ///urlencodedParser  adding middleware
    console.log(req.body)  /////////!!!!!!!!!       [Object: null prototype] { name: 'allwin' }
    // <input type="text"  name="name" >
    res.render('show',{body:req.body}) //inside views folder
})
app.listen(3000)

///////            https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
