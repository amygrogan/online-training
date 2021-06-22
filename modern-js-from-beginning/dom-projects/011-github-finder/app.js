// instantiate classes

// init GitHub
const github = new GitHub;

// init UI
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text 
    const userText = e.target.value;

    if(userText != ''){
        // console.log(userText);
        
        // make HTTP call
        github.getUser(userText)
        .then(data => {
            // console.log(data);
            if(data.profile.message === 'Not Found') {
                // show alert user is not found
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // clear profile
        ui.clearProfile();
    }
});