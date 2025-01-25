// JSON string containing the tasks
const tasksJSON = `[
  { "id": 1, "title": "Fix login bug", "status": "pending", "deadline": "2025-05-10" },
  { "id": 2, "title": "Write unit tests", "status": "completed", "deadline": "2025-06-01" },
  { "id": 3, "title": "Update README documentation", "status": "pending", "deadline": "2025-04-15" },
  { "id": 4, "title": "Design new user profile page", "status": "pending", "deadline": "2025-04-01" }
]`;

// Parse JSON string into a JavaScript array of objects named tasks
const tasks = JSON.parse(tasksJSON);

// Utility function for logging task details
function logTasks(label, taskList) {
  console.log(`${label}:`); //Print the label for the tasks & Standard line pattern
  taskList.forEach(task => console.log(`- ${task.title} (ID: ${task.id}, Status: ${task.status}, Deadline: ${task.deadline})`));
} 

// 1. Function to count pending tasks
function countPendingTasks(taskList) {
  const pendingTasks = taskList.filter(task => task.status === "pending"); // Filter for tasks with status "pending"
  console.log(`Pending Task Count: ${pendingTasks.length}`); // Log the count
  return pendingTasks.length;
}

// 2. Function to get titles of all completed tasks
function getCompletedTaskTitles(taskList) {
  const completedTitles = taskList
    .filter(task => task.status === "completed") // Filter for tasks with status "completed"
    .map(task => task.title); // Extract only the title
  console.log("Completed Task Titles:", completedTitles);
  return completedTitles;
}

// 3. Function to sort tasks by deadline in ascending order
function sortByDeadline(taskList) {
  const sortedTasks = [...taskList].sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); // []...taskList] prevent mutating the ori array
  logTasks("Tasks Sorted by Deadline", sortedTasks); // Log sorted tasks
  return sortedTasks;
}

// 4. Function to filter tasks by a keyword in the title
function filterTasksByKeyword(taskList, keyword) {
  const filteredTasks = taskList.filter(task => task.title.toLowerCase().includes(keyword.toLowerCase())); // Filter by keyword
  logTasks(`Tasks Containing Keyword '${keyword}'`, filteredTasks); // Log filtered tasks
  return filteredTasks;
}

// Example usage
countPendingTasks(tasks); // Count pending tasks
getCompletedTaskTitles(tasks); // Get titles of completed tasks
sortByDeadline(tasks); // Sort tasks by deadline
filterTasksByKeyword(tasks, "login"); // Filter tasks containing the keyword "login"

