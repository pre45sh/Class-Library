
window.onload = function() {
  document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
  document.getElementById("resourceList").innerHTML = localStorage.getItem("resources") || "";
}

function addTask() {
  const task = document.getElementById("taskInput").value;
  const date = document.getElementById("taskDate").value;
  if (task) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = \`<input type="checkbox" onclick="this.parentNode.style.textDecoration = this.checked ? 'line-through' : 'none'"> \${task} - Due: \${date} <button onclick="this.parentNode.remove();saveTasks()">❌</button>\`;
    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
    saveTasks();
  }
}

function addResource() {
  const resource = document.getElementById("resourceInput").value;
  if (resource) {
    const resourceList = document.getElementById("resourceList");
    const li = document.createElement("li");
    li.innerHTML = \`<a href="\${resource}" target="_blank">\${resource}</a> <button onclick="this.parentNode.remove();saveResources()">❌</button>\`;
    resourceList.appendChild(li);
    document.getElementById("resourceInput").value = "";
    saveResources();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

function saveResources() {
  localStorage.setItem("resources", document.getElementById("resourceList").innerHTML);
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
