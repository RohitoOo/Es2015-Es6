

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
console.log(0xff)

// Binary ( NEW )
console.log(0b101011)

//Octol
console.log(0o543)

console.log()
