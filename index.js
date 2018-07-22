

let name = "Rohito"

function makeUpperCase(word){

return  word.toUpperCase();
}

  let template = `
    <h1>This is JavaScript!!</h1>
    <p> Literal Templates Work Beautifully </p>
    <p>Adding "" + "" can get tedious and annoying</p>
    <p>Hi! ${name}...</p>
    <p>Using function to Upper Case --> Hi! ${makeUpperCase(name) }</p>

    `


  document.getElementById('template').innerHTML = template


//Number features Added in ES6

//Hexadicmal
console.log(0xff)  //255


// Binary ( NEW )
console.log(0b101011)  //43

//Octol
console.log(0o543) //355

// Number Methods
// isNeteger

console.log(Number.isInteger(NaN)) //False
console.log(Number.isInteger(2)) // True
console.log(Number.isFinite(NaN)) // false
console.log(Number.isFinite(-2))  //true



// Default Params


function greeting($greeting = "Default : Hello!") {
  console.log($greeting)
}

greeting();



// Spread Operator

var bros = ['Rohito' , 'Sanju' , 'Lavish']
var parents = ['Martin' , 'Reshma']

console.log(...bros, ...parents)


// Set Method


var array = [1,2,3,4,5,6]

console.log(array)

newArray = new Set(array)

newArray.add(7)

newArray.delete(1)

newArray.add({a: 1 , b : 2})

console.log(newArray)



// MAP


let myMap = new Map([ ['a1','Hello'], ['b2' , 'GoodBye'] ])

console.log(myMap)

myMap.set('b3', 'Foo')

console.log(myMap)

//  Map(3) {"a1" => "Hello", "b2" => "GoodBye", "b3" => "Foo"}

let carWeakSet = new WeakSet();

let car1 = {
  make : 'Honda',
  model : 'Accord'
}

carWeakSet.add(car1)

let car2 = {
  make : 'Mercedes',
  model : 'S Class'
}

carWeakSet.add(car2)

console.log(carWeakSet)


// 0
// :
// value
// :
// {make: "Honda", model: "Accord"}
// 1
// :
// value
// :
// {make: "Mercedes", model: "S Class"}
