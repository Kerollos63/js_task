var all_tasks = 0;
var finished_tasks = 0;

var task_input = document.getElementById("taskInput"),
    task_btn = document.querySelector("#taskBtn"),
    tasks = document.querySelector("ul"),
    all_tasks_element = document.getElementById("allTasks"),
    finished_tasks_element = document.getElementById("finishedTasks");

task_btn.onclick = function () {
    if (task_input.value === "") {
        alert("Your Task is Empty");
    } else {
        add_new_task();
        task_finish();
    }

    input_focus();
};

function input_focus() {
    task_input.value = "";
    task_input.focus();
}

function add_new_task() {
    tasks.innerHTML += `<li class="list-group-item">${task_input.value}</li>`;
    all_tasks++;
    all_tasks_element.innerHTML = all_tasks
}

function task_finish() {
    var tasks = document.getElementsByTagName("li");
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        task.onclick = function () {
            task.classList.toggle("list-group-item-success");
            var status = task.classList.contains("list-group-item-success");
            if (status) {
                finished_tasks++;
            } else {
                finished_tasks--;
            }
            finished_tasks_element.innerHTML = finished_tasks;
        };

    };
}