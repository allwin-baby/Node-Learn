
//import system modules
const { EventEmitter } = require('events')
var events  = require('events')//create and fire custom events  
var util = require('util')
//event emitter object
var eventEmitter = new events.EventEmitter()  //constructor   [events.EventEmitter]
//event creation
eventEmitter.on('someEvent',function(msg){
    console.log("event emitted with message:"+msg)
})
//event calling
eventEmitter.emit('someEvent',"this is event callback argument")

//-----------------Add events to Objects-----------------------
//create PERSON object 
var Person  = function(name){
    this.name = name;
}
//attaching eventEmitter to each object created using Person constructor 
              //object constuctor//inheriting property  
              //LOST 30 min events.eventEmitter!!!!
//console.log(events.EventEmitter)
util.inherits(Person,events.EventEmitter) ; //anything created using Perosn gets custom event emitter
var jinto = new Person('james')
var reniz = new Person('reniz')
var ashish = new Person('ashish')
//create array of Persons
var people = [jinto,reniz,ashish]

//forEach is for people array
people.forEach(function(person) {   //function argument is array member
      person.on('speak',function(type_of_work){
          console.log(person.name+" is "+type_of_work)
      })
});

jinto.emit('speak','is drunk')


//Breif
//import events ,create event.EventEmitter object,define event and call back using than object.on,create that call using object.emit 
//instead creating emitter object, attach it to every object to created by Class