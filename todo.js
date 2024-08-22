   loadTasks();
   function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let editButton = document.createElement("button");
    editButton.innerHTML = "<ion-icon name='pencil-outline' class='modify'></ion-icon>";
    editButton.onclick = function() {
        editTask(li);
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<ion-icon name='trash-outline' class='delete'></ion-icon>";
    deleteButton.onclick = function() {
        deleteTask(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    saveTasks();
    taskInput.value = "";
}

function editTask(task) {
    let taskTextElement = task.childNodes[0];
    let taskText = taskTextElement.textContent;

    let newTaskText = prompt('Modifier la tâche :', taskText);

    if (newTaskText === null || newTaskText === "") {
        return;
    }

    taskTextElement.textContent = newTaskText;
    saveTasks();
}

function deleteTask(task) {
    task.remove();
    saveTasks();
}

function saveTasks() {
    let taskList = document.getElementById("taskList");
    let tasks = [];
    for (let i = 0; i < taskList.children.length; i++) {
        tasks.push(taskList.children[i].childNodes[0].textContent);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let taskList = document.getElementById("taskList");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => {
        let li = document.createElement("li");
        li.textContent = taskText;

        let editButton = document.createElement("button");
        editButton.innerHTML = "<ion-icon name='pencil-outline' class='modify'></ion-icon>";
        editButton.onclick = function() {
            editTask(li);
        };

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<ion-icon name='trash-outline' class='delete'></ion-icon>";
        deleteButton.onclick = function() {
            deleteTask(li);
        };

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
    
    fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            })
            .catch(error => console.error('Erreur de chargement du header:', error));
}
