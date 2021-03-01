var allwin=2
//-------template string--- without concatination   
function funconcat(){
    return `this is value of allwin ${allwin}`
}
//concatination(+)
var expfun = function(x){
    return `length is `+ x.length 
}

//function and things to be exported   --> var module = require('./module')
module.exports.allwin = allwin;
//module.exports can be an object
module.exports ={
    expfun :expfun,
    fun  : funconcat
}