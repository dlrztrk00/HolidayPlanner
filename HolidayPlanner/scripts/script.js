document.addEventListener('DOMContentLoaded', function() {
    var flags = document.querySelectorAll('.flag');

    flags.forEach(function(flag) {
        var todoList = flag.querySelector('.todo-list');
        
        flag.addEventListener('click', function(event) {
            if (event.target.closest('.todo-list')) {
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

    $('#register').click(function() {
        $('#register-form').slideToggle();
        $('#login-form').slideUp(); 
    });

    $('#Login').click(function() {
        $('#login-form').slideToggle();
        $('#register-form').slideUp(); 
    });

    $('#search-button').click(function(){
        $('#searchClick').slideToggle();
        $('#login-form').slideUp();
        $('#register-form').slideUp();

    });

    $('#login-form').submit(function(e) {
        e.preventDefault();
        var username = $('#loginUser').val();
        var password = $('#loginPassword').val();

        var user = users.find(function(u) {
            return u.name === username && u.password === password;
        });

        if (user) {
            $('#userInfo').text('Welcome:  ' + user.name);
            $('#userInfo').removeClass('hidden');
            $('#register-form').addClass('hidden');
            $('#login-form').addClass('hidden');
        } else {
            alert('Invalid username or password.');
        }
    });

    $('#register-form').submit(function(e) {
        e.preventDefault();
        var name = $('#registerName').val();
        var password = $('#registerPassword').val();

        var newUser = {
            name: name,
            password: password
        };
        users.push(newUser);

        alert('Registration successful. You can now login.');
        console.log(users);
        $('#register-form').slideUp();
    });
});

