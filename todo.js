
let tasks = [];

let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

function showTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let deleteButton = document.createElement("button");

        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed;
            showTasks();
        });

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            showTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

addTaskButton.addEventListener("click", function() {
    let text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";
    showTasks();
});

taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});
