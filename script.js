window.onload = function() {
  document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
  document.getElementById("resourceList").innerHTML = localStorage.getItem("resources") || "";
}

function addTask() {
  const task = document.getElementById("taskInput").value;
  const date = document.getElementById("taskDate").value;
  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onclick="toggleComplete(this)"> 
      ${task} - Due: ${date} 
      <button onclick="deleteItem(this, 'tasks')">❌</button>
    `;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
    saveList("taskList", "tasks");
  }
}

function addResource() {
  const resource = document.getElementById("resourceInput").value;
  if (resource) {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${resource}" target="_blank">${resource}</a> 
      <button onclick="deleteItem(this, 'resources')">❌</button>
    `;
    document.getElementById("resourceList").appendChild(li);
    document.getElementById("resourceInput").value = "";
    saveList("resourceList", "resources");
  }
}

function deleteItem(button, key) {
  const li = button.parentNode;
  li.remove();
  saveList(key === 'tasks' ? "taskList" : "resourceList", key);
}

function saveList(listId, key) {
  const html = document.getElementById(listId).innerHTML;
  localStorage.setItem(key, html);
}

function toggleComplete(checkbox) {
  checkbox.parentNode.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function filterList() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll("#taskList li, #resourceList li").forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(input) ? "" : "none";
  });
}