function addTask() {
    var newTaskInput = document.getElementById('new-task');
    var deadlineInput = document.getElementById('deadline');
    var descriptionInput = document.getElementById('description');
    var taskList = document.getElementById('todo-list');

    if (newTaskInput.value.trim() !== '') {
        var taskItem = document.createElement('li');
        taskItem.className = 'task';
        
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
        
        taskItem.innerHTML = `
            <div class="display">
                <span>${newTaskInput.value}</span>
                <span class="task-time">${timeString}</span>
                <span class="task-deadline">${deadlineInput.value}</span>
                <span class="task-description">${descriptionInput.value}</span>
                <button onclick="removeTask(this)">Completed✌️</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        
        // Clear input fields
        newTaskInput.value = '';
        deadlineInput.value = '';
        descriptionInput.value = '';
    }
}

function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}

var styles = `
    .display{
        display: flex;
        flex-direction: column;
    }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
