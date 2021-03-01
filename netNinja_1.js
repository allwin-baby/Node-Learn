//for js front end window is the global object
//for nodejs 'global' is the global object
console.log(global)//you can see setIntervel as a method in global.setIntervel


//importing module
var module = require('./module')
var expfun  = console.log("allwin")
//normal function statement
function fun(){
    console.log(__dirname)
}
//function expression
var funexp =  function(a_funtion){
    a_funtion()
    console.log(__filename)
}
//function as argumnet
funexp(fun)
//a global object
setTimeout(function(){
    console.log('4 second')
},4000)
t=0
// executed without calling
console.log('running parrelelly!!!!')
var intervel = setInterval(() => {
    t=t+3
    console.log(t+' seconds passed')
    if (t>10){
        clearInterval(intervel)
    }
}, 3000);
//module details
console.log(module)
console.log(module.allwin)
console.log(module.expfun("findlen"))
console.log(module.fun())
