const container = document.querySelector('.container');
const todoForm = document.querySelector('.todoform');
const todoInput = document.querySelector('.todo-input');
const todoAddButton = document.querySelector('.todobtn');
// un-ordered list
const lists = document.querySelector('.lists');
// massage
const massage = document.querySelector('.massage');

// show massage
const showMassage = (todo, status) => {
    massage.textContent = `${todo}`;
    massage.classList.add(`showMassage-${status}`);
    setTimeout(() => {
        massage.textContent = '';
        massage.classList.remove(`showMassage-${status}`);
    }, 2000);
};

// deleting todos;
const deleteTodos = (event) => {
    const selectedTodos = event.target.parentElement.parentElement;
    console.log(selectedTodos);
    lists.removeChild(selectedTodos);
    showMassage('Todo is Deleted', 'danger');
};

// create todos
const createTodos = (todoId, todovalue) => {
    // list items
    var createList = document.createElement('li');
    createList.id = todoId;
    createList.classList.add('li-styles');
    createList.innerHTML = `
        <span class="text"> ${todovalue} </span>
        <span> <button class="todobtn" id="deleteBtn" > Delete Todo </button> </span>
    `;
    lists.appendChild(createList);

    // deleting todos element
    var deleteBtn = createList.querySelector('#deleteBtn');
    deleteBtn.addEventListener('click', deleteTodos);
};

// receiving input values
const inputTodos = (e) => {
    e.preventDefault();
    var usersValue = todoInput.value;

    // create random id
    const randomId = Date.now().toString();
    // call create Todos
    createTodos(randomId, usersValue);
    showMassage('todo is created', 'success');
};

// add listener
todoForm.addEventListener('submit', inputTodos);
