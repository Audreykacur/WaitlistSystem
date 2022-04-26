// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const todoNum = document.querySelector(".todo-num");
const numList = document.querySelector(".num-list");

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
document.addEventListener('DOMContentLoaded', getTodos);

// Functions
function addTodo(event) {
    event.preventDefault();

    // todo Div
    const todoDiv = document.createElement('div'); //Makes the name in a box pop up
    todoDiv.classList.add('todo'); //creates the white box space
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value + " " + todoNum.value; //enters the name into the box

    newTodo.classList.add('todo-item'); //adds the buffer to the left
    todoDiv.appendChild(newTodo); //makes the blue check box stay to the right

    // Save local todos
    saveLocalTodos(todoInput.value);

    // Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);
    todoInput.value = '';
    todoNum.value = '';
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        // remove
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'incomplete':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    // check if in local storage
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function (todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);




        // Completed Button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        // Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        // Append to list
        todoList.appendChild(todoDiv);
    });


}
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const btn = document.getElementById('btn');

/*btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const phoneNumber = document.getElementById('phone');

  // Send value to server
  console.log(phoneNumber.value);

  // 👇️ clear input field
  phoneNumber.value = '';
});*/

