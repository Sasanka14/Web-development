document.addEventListener('DOMContentLoaded', () => {
    const tasks = [];
    const newTaskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('tasks');
    const progressFilled = document.getElementById('progressFilled');
    const progressText = document.getElementById('progressText');
    const themeToggleButton = document.getElementById('themeToggle');
    const body = document.body;

    // Theme toggle
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
    });

    // Add task
    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        const category = document.getElementById('category').value;

        if (taskText) {
            tasks.push({ text: taskText, category, completed: false });
            newTaskInput.value = '';
            renderTasks();
            updateProgress();
        }
    });

    // Render tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.classList.add(body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
            li.innerHTML = `
                <span>${task.text} (${task.category})</span>
                <button onclick="toggleTask(${index})">✔</button>
                <button onclick="deleteTask(${index})">🗑</button>
            `;
            taskList.appendChild(li);
        });
    }

    // Toggle task completion
    window.toggleTask = function (index) {
        tasks[index].completed = !tasks[index].completed;
        updateProgress();
        renderTasks();
    };

    // Delete task
    window.deleteTask = function (index) {
        tasks.splice(index, 1);
        renderTasks();
        updateProgress();
    };

    // Update progress
    function updateProgress() {
        const completedTasks = tasks.filter(task => task.completed).length;
        const progress = tasks.length ? (completedTasks / tasks.length) * 100 : 0;
        progressFilled.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}% Completed`;
    }
        // Theme Toggle
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
});
