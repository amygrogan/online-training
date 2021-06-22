const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
};

// Home State
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="container-fluid py-5 bg-light">
            <h1 class="display-5 fw-bold">Custom Jumbotron</h1>
            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button class="btn btn-primary btn-lg" type="button">Example Button</button>
        </div>
    `;
};

// About State
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
    `;
};

// Contact State
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'), 
      contact = document.getElementById('contact');

// home
home.addEventListener('click', (e) => {
    page.change(new homeState);
    e.preventDefault();
});

// about
about.addEventListener('click', (e) => {
    page.change(new aboutState);
    e.preventDefault();
});

// contact
contact.addEventListener('click', (e) => {
    page.change(new contactState);
    e.preventDefault();
});