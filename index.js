//lets create an object

//object litteral syntax

//object is a collection of key value pairs

//access the members of the object :
// if an object has one or more methods, it has behaviour, kind of like a person

// or use ,there, a FACTORY function
function createCircle(radius) {
  return /* return this object */ {
    //radius and locations are called properties
    radius,
    //adding the draw method
    /* so here it is a key and its value  */
    draw: function () {
      console.log("draw");
    },
  };
}

//call this function to create a new circle

const circle = createCircle(1);

// define a CONSTRUCTOR  function
//console.log('this', this) displays : this => Circle {} in the console
// uppercase is an obligatory convention in that case
function Circle(radius) {
  /* set the property of the object with a reference to it that executes the piece of code in question */
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  return this;
}

//create a new circle
// the new operator is creating an empty object
//then it will set "this" to point to that object
//by defautl, this points to the global object
// global object is the window object
const another = new Circle(1);

//when we are using the "new" operator to call a function, three things are happening:

//1) create empty object
//2) set this to point to that object
//3) returning the object to the function

// every object in javascript has a property call constructor

// another.constructor in the console gives :

/* f Circle(radius) {

this.radius = radius;
this.draw = function () {
console.log('drawn);
}
}

circle.constructor
f Object() {[native code]}

*/

// ACTUALY the javascript engine is using the constructor function :

let x = {};

//let x=new object();

new String(); // '', ""  => cleaner and simpler then using constructor 
new Boolean() // true,false 
new Number() // 1,2,3 ... 

// function that was used to create the object is the constructor. 

//our function here is actualy an object, lets demonstrate that : 

function Circle (radius) {
    this.radius = radius; 
    this.draw = function () {
        console.log ('draw');
    }
}

const Circle1 = new function('radius', `  this.radius = radius; 
this.draw = function () {
    console.log ('draw');
}    `   ); //radius is added as a string


const circle = new Circle1(1);

const another = new Circle(1);


// Circle.name return the name "Circle"
// Circle.length returns 1
//blue icons are proprety 
//purple ones are methods 
//circle.constructor return f Function () { [native code]}

Circle.call({}, 1);  //passing the arguments
Circle.apply({}, 1, 2 ,3);   //interesting if you have an array somewhere that you wanna pass as a method 

// in JS    FUNCTIONS = OBJECTS

const another = new Circle(1);

//empty object passed to the argument of the method and determines the context

// IN js we have : 

// value types : number, string, bool, symbol, undefined, null 

// reference types : object , function array 



// OTHER PART : 

function Circle (radius) {
    this.radius = radius; 
    this.draw = function () {
        console.log ('draw');
    }
}

const circle = new Circle(10); 
circle.location = { x: 1}; 


const propertyName = 'center-location';
circle.center-location
circle[propertyName] = { x: 1}; 

delete circle.location;

//now we wanna access the location property of a circle 
// the name of the property is calculated at run time 






// objects in js are dynamic so you can add and remove properties to your object
// client set a user object to server and then you wanna add aditional stuff such as token property 
// user.token ="adazasdasd"

// in java you have to change your classes 





// what about enumerating properties ?? we can do it using the for in loop

function Circle (radius) {
    this.radius = radius; 
    this.draw = function () {
        console.log ('draw');
    }
}

const circle = new Circle(10); 

for (let key in circle) {
if (typeof circle[key])  !== 'function';
console.log(key, circle[key]); 
//we have radius and draw 
// to have the value you use bracket notation 
}

Object.keys(circle);
console.log(keys); 
//return all keys in the circle as arrays

if ('radius' in circle)
console.log('circle has radius');

//What about ABSTRACTION ? means that you have to hide the details and only show whats essentialls. 
//typical exemple is the dvd player : only a few buttons and complexity inside
//private properties and method are there for that 




function Circle (radius) {


    let radius = radius;
    
    let defaultLocation = { x: 0, y:0 }; 
// defaultLocation is implementation detail and we wanna hide it . 

    let computeOptimumLocation = function() {
        
// ... 
    
    }

    this.draw = function () {

let x, y; //the scope of those variables is limited to that function


        //calling the method : 
        computeOptimumLocation(0.1); //this will create a problem, see below
        //defaultLocation
        //this.radius
        console.log ('draw');
    }
}

const circle = new Circle(10); 
circle.computeOptimumLocation(0.1); //put object in bad state
//circle.
circle.draw(); //displays a problem 


//closure determines which variable will be accessible in the function it is not temporary


// GETTERS AND SETTERS : 

//a getter is a function used to read a property 
// a setter is to define a property from the outside of the function 

function Circle (radius) {

    let radius = radius;
    
    let defaultLocation = { x: 0, y:0 }; 

this.getDefaultLocation = function () {
    return defaultLocation
}


    this.draw = function () {
        console.log ('draw');
    };

Object.defineProperties(this, 'defaultLocation', 

get: function() {

return defaultLocation; 

},

set: function (value) {
    
    if (!value.x OR !value.y )
    throw new Error('invalid location') //built in constructor used to create the object
// this is the benefit of a setter

    defaultLocation = value;
}

});

const circle = new Circle(10); 
circle.defaultLocation = 1; // returns invalid location 
circle.getDefaultLocation(); // nicer to access the property like this : 
circle.defaultLocation = 0; 
circle.draw(); 
circle.defaultLocation //function is called 


// exercice for the console : 

const sw = new StopWhatch()

sw.start()

sw.stop()

sw.duration

sw.reset()

sw.start()

sw.stop()

sw.duration 



// here is the stopWatch object in action : 

function Stopwatch () {

let startTime, endTime, running, duration = 0; 



this.start = function() {

}; 

this.stop = function() {

if (!running)

throw new Error('Stopwatch is not started'); 

running = false;

endTime = new Date(); 


const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
duration += seconds; 




}; 

this.reset = function() {

startTime= null;
endTime= null; 
running= false;
duration= 0; 

}

Object.defineProperty(this, 'duration', {

get : function() { return duration; }

});


}


// we have three method here 
// read only property 




