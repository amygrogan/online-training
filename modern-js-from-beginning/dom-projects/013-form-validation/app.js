// form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(name.value)) {  // test() method test for a match in a string
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!re.test(zip.value)) {  // test() method test for a match in a string
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)) {  // test() method test for a match in a string
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    // formats to accept
    // 222-333-4444
    // (222) 333-4444
    // 222.333.4444
    // 2223334444

    if(!re.test(phone.value)) {  // test() method test for a match in a string
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}