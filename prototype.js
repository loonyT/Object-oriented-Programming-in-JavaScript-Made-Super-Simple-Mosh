let x = { value: 10 }; //the value of the object is not stored in the var but somewhere else in the memory and whats stocked in the var is actualy the adress of where the value of the object is stored.
let y = x;

x.value = 20;

// y = 10
// x and y are pointing toward the same object in the memory

// primitives are copied by their value
// objects are copied by their reference

let number = 10;

function increase(number) {
  number++;
}

increase(number);

console.log(number);

// 10 is the output

// lets try smtg else here :

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(number);

console.log(number);

//now the console will displays 11 as output
