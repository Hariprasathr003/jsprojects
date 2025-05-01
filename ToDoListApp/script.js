const button = document.getElementById("button");
const inputdata = document.getElementById("inputdata");
const tasklist = document.getElementById("tasklist");

const data = JSON.parse(localStorage.getItem("task")) || [];
let editindex = null; //edit only use let varaiable

//addtask

button.addEventListener("click", addtask);

function addtask() {
  const inputlist = inputdata.value.trim();

  if (inputlist) {
    if (editindex !== null) {
      data[editindex] = inputlist;
      editindex = null;
    } else {
      data.push(inputlist);
    }
    inputdata.value = "";
    pageReload();
    savetask();
  }
}

//page reload
function pageReload() {
  tasklist.innerHTML = "";
  data.forEach((task, index) => {
    const list = document.createElement("li");

    list.innerHTML = `${task} 
                      <button onclick="edit(${index})">Edit</button>
                      <button onclick="deleteindex(${index})">Delete</button>`;
    tasklist.appendChild(list);
  });
}

//savetask

function savetask() {
  localStorage.setItem("task", JSON.stringify(data));
}

//edittask

function edit(index) {
  const datas = data[index];
  inputdata.value = datas;
  editindex = index;
  button.textContent = "Update";
}

//deletetask

function deleteindex(index) {
  data.splice(index, 1);
  savetask();
  pageReload();
}
