
document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('taskList');
        
       
        const li = document.createElement('li');
        li.textContent = taskValue;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', removeTask);
        
        li.appendChild(removeBtn);
        taskList.appendChild(li);

       
        storeTasks();
        taskInput.value = ''; 
    }
}

function removeTask(event) {
    event.target.parentElement.remove();
    storeTasks(); 
}

function storeTasks() {
    const taskList = [];
    document.querySelectorAll('#taskList li').forEach((task) => {
        taskList.push(task.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', removeTask);
        
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
}

loadTasks(); 
