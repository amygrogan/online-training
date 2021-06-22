// const greeting = 'Hello World';
// console.log(greeting);

// Common JS Module Syntax
// const person = require('./mymodule1'); //how you call an ext module in

// ES2015 Module
// import{ person, sayHello } from './mymodule2';
// import * as mod from './mymodule2';
// import greeting from './mymodule2';

// console.log(person.name);
// console.log(mod.person.name);
// console.log(mod.sayHello());
// console.log(greeting);


import { http } from './http';
import { ui } from './ui';

// get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// listen for add post
document.querySelector('#posts').addEventListener('click', deletePost);

// listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

// get posts
function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

// submit post
function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;

    const data = {
        title: title,
        body: body
    }

    // validate input
    if(title === '' || body === '') {
        ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } else {
        // check for ID
        if(id === '') {
            // create post
            http.post('http://localhost:3000/posts', data)
            .then(data => {
                ui.showAlert('Post added', 'alert alert-success');
                ui.clearfields();
                getPosts();
            })
            .catch(err => console.log(err));
        } else {
            // update post
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(data => {
                ui.showAlert('Post updated', 'alert alert-success');
                ui.changeFormState('add');
                getPosts();
            })
            .catch(err => console.log(err));
        }        
    }
}

// delete post
function deletePost(e) {
    e.preventDefault();
    // console.log('delete');
    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id;
        if(confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                ui.showAlert('Post Removed', 'alert alert-success');
                getPosts();
            })
            .catch(err => console.log(err));
        }
    }
}

// enable edit state
function enableEdit(e) {
    // console.log(e.target);
    if(e.target.parentElement.classList.contains('edit')) {
        const id = e.target.parentElement.dataset.id;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;
        
        const data = {
            id,
            title,
            body
        }

        // fill form with current post
        ui.fillForm(data);
    }
    e.preventDefault();
}

// cancel edit state
function cancelEdit(e) {
    if(e.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }
    e.preventDefault();
}