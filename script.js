
function addTask() {
  const task = document.getElementById("taskInput").value;
  const date = document.getElementById("taskDate").value;
  if (task) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = task + " - Due: " + date;
    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
  }
}

function addResource() {
  const resource = document.getElementById("resourceInput").value;
  if (resource) {
    const resourceList = document.getElementById("resourceList");
    const li = document.createElement("li");
    li.innerHTML = `<a href="${resource}" target="_blank">${resource}</a>`;
    resourceList.appendChild(li);
    document.getElementById("resourceInput").value = "";
  }
}
