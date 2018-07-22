

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
