let myPromise = new Promise(  (resolve, reject) => {

  setTimeout( () => {
    resolve('Good To Go')
  }, 1000)


})

let myPromise1 = new Promise(  (resolve, reject) => {

  setTimeout( () => {
    resolve('Good To Go')
  }, 1000)


  setTimeout( () => {
    reject('Hahhahahaha')
  }, 200)
})

// myPromise.then( (msg) => {
//   console.log(msg)
// })
//
// .catch( (msg) => {
//   console.log(msg)
// })




Promise.all([myPromise, myPromise1])

// Only goes here if all the promises return resolve !!

.then( (data) => {
  console.log(data)
})
.catch( (msg) => {
  console.log(msg)
})
