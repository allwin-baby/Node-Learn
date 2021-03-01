

//THIS IS ARRAY NOT JSON  ----FOREACH WORK ONLY WITH ARRAYS
var todo = [{ item: 'k'}, {item: 'a'}, {item: 'm'}]
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('todo', { 'listy': todo })
    })
    app.post('/', urlencodedParser, function (req, res) {
        //https://stackoverflow.com/questions/56298481/how-to-fix-object-null-prototype-title-product
        console.log(req.body)// req.body = [Object: null prototype] { title: 'product' }
        const obj = JSON.parse(JSON.stringify(req.body)); 
        console.log(obj); // { title: 'product' }  
        todo.push(obj)     
        res.render('todo', { 'listy': todo })  
    })
}