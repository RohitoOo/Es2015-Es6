
'use strict'

const axios = require('axios')

axios.get('http://api.icndb.com/jokes/random')

.then( (data) => {
console.log(data.data.value.joke)
// data.json().then( (joke) => {
//   console.log(joke.value.joke)
// })

})

// .catch( (err) => {
//   console.log(err)
// })
