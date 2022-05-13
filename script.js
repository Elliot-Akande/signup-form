const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => validateForm(event));

const validateForm = event => {
    if (password.value != confirmPassword.value) {
        event.preventDefault();
        password.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        
        password.addEventListener('input', event => waitForPasswordMatch(event));
        confirmPassword.addEventListener('input', event => waitForPasswordMatch(event));
    }
};

const waitForPasswordMatch = event => {
    if (password.value == confirmPassword.value) {
        password.classList.remove('invalid');
        confirmPassword.classList.remove('invalid');
    }
} ;
