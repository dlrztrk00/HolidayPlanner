document.addEventListener('DOMContentLoaded', function() {
    var flags = document.querySelectorAll('.flag');

    flags.forEach(function(flag) {
        var todoList = flag.querySelector('.todo-list');
        
        flag.addEventListener('click', function(event) {
            if (event.target.closest('.todo-list')) {
                // Eğer tıklanan yer to-do list'in içindeyse, hiçbir şey yapma
                return;
            }

            if (todoList.style.display === 'none' || todoList.style.display === '') {
                todoList.style.display = 'block';
            } else {
                todoList.style.display = 'none';
            }
        });
    });

    var addButtons = document.querySelectorAll('.todo-list button');

    addButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var input = this.previousElementSibling;
            var newTask = input.value;
            if (newTask.trim() !== '') {
                var ul = this.previousElementSibling.previousElementSibling;
                var li = document.createElement('li');
                li.textContent = newTask;
                ul.appendChild(li);
                input.value = '';
            }
        });
    });
});

$(document).ready(function() {
    var users = [];

    // Toggle registration and login forms
    $('#register').click(function() {
        $('#register-form').slideToggle();
        $('#login-form').slideUp(); // Hide the login form if it's currently visible
    });

    $('#Login').click(function() {
        $('#login-form').slideToggle();
        $('#register-form').slideUp(); // Hide the registration form if it's currently visible
    });

    // Login functionality
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        var email = $('#loginEmail').val();
        var password = $('#loginPassword').val();

        var user = users.find(function(u) {
            return u.email === email && u.password === password;
        });

        if (user) {
            $('#loggedInUser').text(user.name);
            $('#selection1 a').text(user.name); // Display user's name in "Seçim 1"
            $('#loggedInUserInfo').removeClass('d-none');
            $('#registerFormContainer').addClass('d-none');
            $('#loginFormContainer').addClass('d-none');
            $('#form-container').slideUp();
        } else {
            alert('Invalid email or password.');
        }
    });

    // Registration functionality
    $('#registerForm').submit(function(e) {
        e.preventDefault();
        var name = $('#registerName').val();
        var email = $('#registerEmail').val();
        var password = $('#registerPassword').val();

        var newUser = {
            name: name,
            email: email,
            password: password
        };
        users.push(newUser);

        alert('Registration successful. You can now login.');
        console.log(users);
        $('#form-container').slideUp();

        
    });
});
