// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // add task event
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// get tasks from Local Storage
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // create li element
    const li = document.createElement('li');
    // add a class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(task));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to the li
    li.appendChild(link);

    // append li to the ul
    taskList.appendChild(li);
  });
}

// add task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a Task');
  }

  // create li element
  const li = document.createElement('li');
  // add a class
  li.className = 'collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to the li
  li.appendChild(link);

  // append li to the ul
  taskList.appendChild(li);
  // console.log(li);

  // Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = '';
  
  e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    //console.log(e.target);
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      // remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
    
  }
  
}

// remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear tasks
function clearTasks() {
  // taskList.innerHTML = '';
  // https://jsperf.com/innerhtml-vs-removechild

  // faster method
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // clear from Local Storage
  clearTasksFromLocalStorage();
}


// clear tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  // console.log(text);

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}