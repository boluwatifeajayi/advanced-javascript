//array of posts

const posts = [
    {title : "Post one", body : "this is post one"},
    {title : "Post two", body : "this is post two"}
];

//function

function getPosts(){
    setTimeout(() => {
        let output = '';
        //high order looping 
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

//callback functipn

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({title: 'Post three', body: 'this is the third post'}, getPosts);