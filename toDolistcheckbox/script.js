const input = document.getElementById("input");
const button = document.getElementById("button");
const ulist = document.getElementById("ulist");

const store = JSON.parse(localStorage.getItem("storeDate")) || [];
let editindex = null;

button.addEventListener("click", () => {
  const inputvalue = input.value.trim();
  if (inputvalue) {
    if (editindex !== null) {
      store[editindex].text = inputvalue;
      editindex = null;
    } else {
      store.push({ text: inputvalue, completed: false });
    }
  }
  input.value = "";
  render();
  save();
});

function render() {
  ulist.innerHTML = "";
  store.forEach((item, index) => {
    const list = document.createElement("li");

    // const checkbox = document.createElement("input");
    // checkbox.type = "checkbox";
    // checkbox.checked = item.completed;
    // checkbox.addEventListener("change", () => checkboxfunction(index));

    // const text = document.createElement("span");
    // text.textContent = item.text;

    // const editbutton = document.createElement("button");
    // editbutton.textContent = "edit";
    // editbutton.addEventListener("click", () => edituser(index));

    // const delbutton = document.createElement("button");
    // delbutton.textContent = "del";
    // delbutton.addEventListener("click", () => deluser(index));

    // list.appendChild(checkbox);
    // list.appendChild(text);
    // list.appendChild(editbutton);
    // list.appendChild(delbutton);

    list.innerHTML = `
         <input type="checkbox" ${
           item.completed ? "checked" : ""
         } onclick="checkboxfunction(${index})"/>
        ${item.text}
      <button onclick="edituser(${index})">edit</button>
      <button onclick="deluser(${index})">del</button>
    `;

    ulist.appendChild(list);
  });
}

function edituser(index) {
  console.log(index, "indexxxxxxxxxxx");
  console.log(store[index], "inputtttttttttttt");
  input.value = store[index].text;
  editindex = index;
  render();
  save();
}

function deluser(index) {
  store.splice(index, 1);
  render();
  save();
}

function checkboxfunction(index) {
  console.log(index, "inddddddddddd");
  store[index].completed = !store[index].completed;
  render();
  save();
}

function save() {
  localStorage.setItem("storeDate", JSON.stringify(store));
  render();
}
