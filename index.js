function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    li.innerText = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.onclick = function() {
        li.remove();
    };

    var completeButton = document.createElement("button");
    completeButton.innerText = "✓";
    completeButton.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}
