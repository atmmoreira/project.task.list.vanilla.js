// Define UI Variables
const btnAddTask = document.querySelector('#btnAddTask');
const inputTask = document.querySelector('#inputTask');
const inputFilterTask = document.querySelector('#inputFilterTask');
const listGroupTasks = document.querySelector('.list-group');

// Load all event listners
loadEventListeners();

function loadEventListeners() {
  // Add Task Events
  btnAddTask.addEventListener('click', addTask);
  // Remove task Events
  listGroupTasks.addEventListener('click', deleteTask);
  // Filter Tasks
  inputFilterTask.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  if (inputTask.value === '') {
    alert('Adicione uma tarefa');
    return;
  }

  const listItens = document.createElement('li');
  const spanTextTask = document.createElement('span');
  const spanDeleteTask = document.createElement('span');

  listItens.className = 'list-group-item';
  spanDeleteTask.className = 'text-danger delete-item float-end';
  spanDeleteTask.innerHTML = '<i class="fa fa-trash-can"></i>';
  spanTextTask.appendChild(document.createTextNode(inputTask.value));
  listItens.appendChild(spanTextTask);
  listItens.appendChild(spanDeleteTask);

  listGroupTasks.appendChild(listItens);

  inputTask.value = '';
  e.preventDefault();
}

function deleteTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Tem certeza?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.list-group-item').forEach((task) => {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
