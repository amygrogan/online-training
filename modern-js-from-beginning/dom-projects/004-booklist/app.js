// ES5 Script

// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() { }

// Add Book to List
UI.prototype.addBookToList = function(book){
    // console.log(book);
    const list = document.getElementById('book-list');
    // Create TR element
    const row = document.createElement('tr');
    console.log(row);

    //insert COLS
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
    `;

    list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className){
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    // insert alert
    container.insertBefore(div, form);

    // timeout after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listener for Add Book
document.getElementById('book-form').addEventListener('submit', function(e){
    // console.log('test');

    // Get Form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value, 
          isbn = document.getElementById('isbn').value

    //console.log(title, author, isbn);

    // instantiate book
    const book = new Book(title, author, isbn);

    // instantiate UI
    const ui = new UI();
    console.log(ui);

    // validate
    if(title === '' || author === '' || isbn === ''){
        //alert('failed');
        
        // error alert
        ui.showAlert('please fill in all fields', 'error')
    } else {
        //console.log(book);
        // add book to list
        ui.addBookToList(book);

        // show success
        ui.showAlert('Book Added!', 'success');

        // Clear Fields
        ui.clearFields();
    }
    e.preventDefault();
})

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();
    
    ui.deleteBook(e.target);

    // show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});