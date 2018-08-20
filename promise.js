let myPromise = new Promise(  (resolve, reject) => {

  setTimeout( () => {
    resolve('Good To Go')
  }, 1000)


})

let myPromise1 = new Promise(  (resolve, reject) => {
  resolve( "Resolved Second Promise!")
})

// myPromise.then( (msg) => {
//   console.log(msg)
// })
//
// .catch( (msg) => {
//   console.log(msg)
// })


Promise.all([myPromise, myPromise1])

.then( (data) => {
  console.log(data)
})
