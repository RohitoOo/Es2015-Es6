"use strict";
//
// class User {
//   constructor(username, email, password){
//
// this.username = username;
// this.email = email;
// this.password = password;
//
//   }
//
//
// // Static Function/Method
//
// static countUsers() {
//   console.log("There are 50 users")
// }
//
//   register(){
//   console.log(this.username + " is now registered ")
//   }
//
//
// }

// Registration
//
// let bob = new User("Rohito", "rohito@gmail.com" , "password")
//
// bob.register()

// Static Method
// User.countUsers

//
// class Member extends User {
//   constructor(username, email, password, memberPackage){
//   super(username,email,password);
//     this.package = memberPackage;
//   }
//
// getPackage(){
// console.log( this.username + " is subscribed to the " + this.package)
// }
//
// }
//
// let rohito = new Member('Rohito', 'rohito@gmail.com' , 'password' , 'Executive Package')
//
// // rohito.getPackage()
//
// rohito.register()


var template = "<h1>This is JavaScript!!</h1><p> Literal Templates Work Beautifully </p>";

document.getElementById('template').innerHtml = template;