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
