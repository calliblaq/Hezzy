// Load saved earnings
let earnings = parseFloat(localStorage.getItem("earnings")) || 0;
document.getElementById("earnings-value").textContent = earnings.toFixed(2);

// Example survey tasks
const tasks = [
    { id: 1, title: "5-minute Feedback Survey", reward: 0.50, completed: false },
    { id: 2, title: "Product Review", reward: 1.00, completed: false },
    { id: 3, title: "Quick Poll", reward: 0.25, completed: false }
];

// Render tasks
const container = document.getElementById("tasks-container");
tasks.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <h3>${task.title}</h3>
        <p>Reward: $${task.reward.toFixed(2)}</p>
        <button id="btn-${task.id}">Complete</button>
    `;
    container.appendChild(taskDiv);

    // Handle button click
    document.getElementById(`btn-${task.id}`).addEventListener("click", () => {
        if (!task.completed) {
            task.completed = true;
            earnings += task.reward;
            localStorage.setItem("earnings", earnings);
            document.getElementById("earnings-value").textContent = earnings.toFixed(2);
            document.getElementById(`btn-${task.id}`).textContent = "Completed";
            document.getElementById(`btn-${task.id}`).disabled = true;
        }
    });
});
