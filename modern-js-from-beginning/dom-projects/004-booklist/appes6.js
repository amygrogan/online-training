class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create TR element
        const row = document.createElement('tr');
        // console.log(row);
    
        //insert COLS
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
        `;
    
        list.appendChild(row);
    }

    showAlert(message, className) {
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

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        // show in the UI
        const books = Store.getBooks();
        
        books.forEach(function(book){
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        //console.log(isbn);
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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

        // add to Local Storage
        Store.addBook(book);

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

    // Remove from Local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});