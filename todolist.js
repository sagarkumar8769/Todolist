const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        // Create task item
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        // Append task item to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}