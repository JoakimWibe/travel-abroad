const form = document.querySelector('#contactForm');
const name = document.querySelector('#name');
const nameError = document.querySelector('#nameError');
const subject = document.querySelector('#subject');
const subjectError = document.querySelector('#subjectError');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const message = document.querySelector('#message');
const messageError = document.querySelector('#messageError');
const success = document.querySelector('#success');

function validateForm(event) {
    event.preventDefault();

    if (checkLenght(name.value, 4) === true) {
        nameError.style.display = 'none';
    } else {
        nameError.style.display = 'block';
    }

    if (checkLenght(subject.value, 14) === true) {
        subjectError.style.display = 'none';
    } else {
        subjectError.style.display = 'block';
    }

    if (checkLenght(message.value, 24) === true) {
        messageError.style.display = 'none';
    } else {
        messageError.style.display = 'block';
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
    }

    if (validateEmail(email.value) === true && checkLenght(message.value, 24) === true && checkLenght(subject.value, 14) === true && checkLenght(name.value, 4) === true ) {
        success.style.display = 'block';
    } else {
        success.style.display = 'none';
    }

}

form.addEventListener('submit', validateForm);

function checkLenght(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}