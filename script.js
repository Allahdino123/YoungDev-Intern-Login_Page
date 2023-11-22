function validateForm() {

    var nameInput = document.getElementById('name').value;
    var passwordInput = document.getElementById('password').value;

    document.getElementById('nameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';

    var nameRegex = /^[a-zA-Z0-9_-]{3,16}$/; 
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

    if (nameInput.trim() === '') {
        document.getElementById('nameError').innerHTML = 'Please enter your username.';
        return;
    }

    if (!nameRegex.test(nameInput)) {
        document.getElementById('nameError').innerHTML = 'Invalid username format.';
        return;
    }

    
    if (passwordInput.trim() === '') {
        document.getElementById('passwordError').innerHTML = 'Please enter your password.';
        return;
    }

    
    if (!passwordRegex.test(passwordInput)) {
        document.getElementById('passwordError').innerHTML = 'Invalid password format.';
        return;
    }

   
    alert('Form submitted successfully!');
}