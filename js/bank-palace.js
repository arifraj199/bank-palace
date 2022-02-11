const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function() {
    // get input field findout
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');

    // get input value
    const userEmailValue = userEmail.value;
    const userPasswordValue = userPassword.value;

    // check condition
    if (userEmailValue == 'karif9514@gmail.com' && userPasswordValue == 'arif@210505') {
        console.log('user validated');
    }
})