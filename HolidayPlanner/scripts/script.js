var users = [];

$(document).ready(function() {
    $('#registerForm').submit(function(event) {
        event.preventDefault();
        
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        
        var newUser = {
            username: username,
            email: email,
            password: password
        };
        
        registerUser(newUser);
    });

    function registerUser(newUser) {
        users.push(newUser);
        
        console.log('User registered successfully:', newUser);
        console.log('Updated users array:', users); // Kullanıcılar dizisini kontrol et
        alert('Registration successful!');
    }
    
});

$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        
        var username = $('#loginUsername').val();
        var password = $('#loginPassword').val();
        
        login(username, password);
        
    });

    function login(username, password) {
        var foundUser = users.find(function(user) {
            return user.username === username && user.password === password;
        });
    
        console.log('Found user:', foundUser); // Kullanıcı bulunduğunda foundUser'ı kontrol et
    
        if (foundUser) {
            alert('Login successful!');
            $('#main-content').html('<h2>Welcome, ' + foundUser.username + '</h2>');
            window.location.href = 'main.html';
        } else {
            alert('Invalid username or password!');
        }
    }
    
});
