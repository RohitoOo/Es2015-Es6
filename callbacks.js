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
setTimeout( ()=>{
    posts.push(post)
    getPosts()
}, 3000 )
}

createPost({title: "Post 100", body: "This is post 100"});


