const posts = [
    {title: 'Posts One', body: 'This is post one'},
    {title: 'Posts Two', body: 'This is post two'}
];

// Synchronis Way
// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();


// Async
function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);