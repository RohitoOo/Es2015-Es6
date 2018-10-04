
'use strict'

fetch('http://api.icndb.com/jokes/random')

.then( (data) => {

data.json().then( (joke) => {
  console.log(joke.value.joke)
})

})

// .catch( (err) => {
//   console.log(err)
// })
