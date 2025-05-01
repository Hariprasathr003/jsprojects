const username = document.getElementById("name");
const age = document.getElementById("age");
const form = document.getElementById("form");
const ulist = document.getElementById("ulist");
const role = document.getElementById("role");

const store = [];
let edit = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameinput = username.value.trim();
  const ageinput = age.value.trim();
  const roleinput = role.value.trim();

  const inputvalue = { name: nameinput, age: ageinput, role: roleinput };
  if (nameinput && ageinput && roleinput) {
    if (edit !== null) {
      store[edit] = inputvalue;
      edit = null;
    } else {
      store.push(inputvalue);
    }
  }
  username.value = "";
  age.value = "";
  role.value = "";
  createuser();
});

function createuser() {
  ulist.innerHTML = "";
  store.forEach((item, index) => {
    const list = document.createElement("li");
    list.innerHTML = `Name: ${item.name}, Age: ${item.age} ,Role :${item.role}
    <button onclick="edituser(${index})">edit</button>
    <button onclick="del(${index})">del</button>`;
    ulist.appendChild(list);
  });
}

function edituser(index) {
  const user = store[index];
  username.value = user.name;
  age.value = user.age;
  role.value = user.role;
  edit = index;
}

function del(index) {
  store.splice(index, 1);
  createuser();
}
