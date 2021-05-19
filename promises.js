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

//promise functipn

// function createPost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post)
            
//             const error = false;

//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('something went wrong')
//             }
//         }, 2000);
//     })  
// }

// createPost({title: 'post three', body: 'post three body'})
// .then(getPosts)
// .catch(err => console.log(err));


//async await

// async function init(){
//     await createPost({title: 'post three', body: 'post three body'})

//     getPosts();
// }

// init();

//async await with fetch api

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();
    console.log(data);
}

fetchUsers();

//promise.all

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));