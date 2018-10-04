//
// // Literals ``
// // 1. Multi Line Functionality
// // 2. Add Variables
// // 3. Add Functions
//
//
// let name = "Rohito"
//
// function makeUpperCase(word){
//
// return  word.toUpperCase();
// }
//
//   let template = `
//     <h1>This is JavaScript!!</h1>
//     <p> Literal Templates Work Beautifully </p>
//     <p>Adding "" + "" can get tedious and annoying</p>
//     <p>Hi! ${name}...</p>
//     <p>Using function to Upper Case --> Hi! ${makeUpperCase(name) }</p>
//
//     `
// document.getElementById('template').innerHTML = template
//
//
//
// // Check start and End of Strings
// //
// // var str = "Hello, I love Js"
// //
// // str.startsWith("Hello")  // True
// // str.endsWith("Js") // True
//
//
//
// //Number features Added in ES6
//
// //Hexadicmal
// console.log(0xff)  //255
//
// // Binary ( NEW )
// console.log(0b101011)  //43
//
// //Octol
// console.log(0o543) //355
//
// // Number Methods
// // isInteger
//
// console.log(Number.isInteger(NaN)) //False
// console.log(Number.isInteger(2)) // True
// console.log(Number.isFinite(NaN)) // False
// console.log(Number.isFinite(-2))  //true
// console.log(Number.isNaN(NaN))  //true
//
//
// // Default Params
//
//
// function greeting($greeting = "Default : Hello!") {
//   console.log($greeting)
// }
//
// greeting();
//
//
//
//
//
// // Spread Operator
//
// var bros = ['Rohito' , 'Sanju' , 'Lavish']
// var parents = ['Martin' , 'Reshma']
//
// var family = [...bros, ...parents]
//
// family; // [ 'Rohito', 'Sanju', 'Lavish', 'Martin', 'Reshma' ]
//
//
// // Spread Operator
//
// let arr = [1,2]
//
// var newArr = [3,4,...arr,2]
//
// newArr;
//
//
// // Set Method
//
//
// var array = [1,2,3,4,5,6]
//
// console.log(array)
//
// newArray = new Set(array)
//
// newArray.add(7)
//
// newArray.delete(1)
//
// newArray.add({a: 1 , b : 2})
//
// console.log(newArray)
//
//
//
// // MAP
//
//
// let myMap = new Map([ ['a1','Hello'], ['b2' , 'GoodBye'] ])
//
// console.log(myMap)
//
// myMap.set('b3', 'Foo')
//
// console.log(myMap)
//
// //  Map(3) {"a1" => "Hello", "b2" => "GoodBye", "b3" => "Foo"}
//
// let carWeakSet = new WeakSet();
//
// let car1 = {
//   make : 'Honda',
//   model : 'Accord'
// }
//
// carWeakSet.add(car1)
//
// let car2 = {
//   make : 'Mercedes',
//   model : 'S Class'
// }
//
// carWeakSet.add(car2)
//
// console.log(carWeakSet)
//
//
// // 0
// // :
// // value
// // :
// // {make: "Honda", model: "Accord"}
// // 1
// // :
// // value
// // :
// // {make: "Mercedes", model: "S Class"}
//
//
// // Promises -> Asynchronous
//
//
// var myPromise = Promise.resolve('Promises Are Meant To Be Broken?')
//
// myPromise.then((res) => console.log(res))
//
//
//
// // Fetch Data From API
//
//
// function getData(method, url) {
//
// return new Promise(function(resolve, reject){
//   var xhr = new XMLHttpRequest();
//   xhr.opne(method , url);
//   xhr.onload = function(){
//     if(this.status >= 200 && this.status < 300){
//       resolve(xhr.response)
//     }else {
//       reject({
//         status: this.status,
//         statusText: this.
//       })
//     }
//   }
// })
//
// }
