function getTodos() {
    let todos = localStorage.getItem('todo');
    return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos) {
    localStorage.setItem('todo', JSON.stringify(todos));
}

function show() {
    let todos = getTodos();
    let html = '<ul>';
    for (let i = 0; i < todos.length; i++) {
        html += `<li>${todos[i]} <button class="remove" data-id="${i}">x</button></li>`;
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    // Attach remove buttons
    let buttons = document.getElementsByClassName('remove');
    for (let btn of buttons) {
        btn.addEventListener('click', function () {
            let id = this.getAttribute('data-id');
            todos.splice(id, 1);
            saveTodos(todos);
            show();
        });
    }
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText) {
        let todos = getTodos();
        todos.push(taskText);
        saveTodos(todos);
        input.value = '';
        show();
    }
}

// Set today's date
document.getElementById("date").textContent = new Date().toLocaleDateString();

// Add event listener to Add button
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Show existing tasks on load
show();
