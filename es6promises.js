// const axios = require('axios')


const posts = [
    {title: "Post 1", body: "This is post 1"},
    {title: "Post 2", body: "This is post 2"},
    {title: "Post 3", body: "This is post 3"},
    {title: "Post 4", body: "This is post 4"},
    {title: "Post 5", body: "This is post 5"},
    {title: "Post 6", body: "This is post 6"},
    {title: "Post 7", body: "This is post 7"},
]



function getPosts(){

    // Mimic Fetch Request 
    setTimeout(() => {
        let output = ""
        
        posts.map( post => 

            output += `
            <blockquote>
       
      <table>
      <thead>
        <tr>
            <th> ${post.title}</th>
            <th>${post.body}</th>
        </tr>
      </thead>
    </table>
    </blockquote>
            `
        )
        document.body.innerHTML = output

    }, 1000)


}

function createPost(post){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            posts.push(post)

            const error = false;
            // const error = false;

            if(!error){
                resolve()
            }else {
                // Custom Error Message Creation 
                reject("Error: You messed it up boy!")
            }
        }, 2000 )
    } ) 

}



// 
// .then(getPosts)
// .catch(err => console.log(err))


// Async Await 

async function init(){
   
    // Wait for Post To get Created ---> Then Call the below function getPosts()
    await createPost({title: "Post 100", body: "This is post 100"})

   getPosts();

}

init();

// //Promise ALL

// const promise1 = Promise.resolve("Dummy Text From Promise1")
// const promise2 = 2;
// const promise3 = new Promise( (resolve, reject) => 
//     setTimeout( resolve, 2000, "promise3 Executed!") 
// )
// // fetch from an API --> return a promise



// const promise4 = fetch('http://api.icndb.com/jokes/random').then(res => res.json())

// Promise.all([promise1,promise2,promise3, promise4]).then( result =>
//     console.log(result, "Chuck Norris Joke : ", result[3].value.joke)
    
// )



// async await fetch 

async function getJoke() {
    await fetch('http://api.icndb.com/jokes/random')

    .then(res => res.json())

    .then( data => {
      document.body.innerHTML =  `<h2>${data.value.joke}</h2>`
    })
}

setInterval( ()=> {
getJoke()
}, 3000)