const emailinput = document.getElementById("emailinput");
const passinput = document.getElementById("passinput");
const button = document.getElementById("button");
const form = document.getElementById("formlogin");
const ulist = document.getElementById("ulist");

const userlogin = JSON.parse(localStorage.getItem("storedata")) || [];
let forget = null;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailinput.value.trim();
  const pass = passinput.value.trim();

  if (email && pass) {
    const store = { email: email, pass: pass };

    if (forget !== null) {
      userlogin[forget] = store;
      forget = null;
      alert("update user login");
    } else {
      userlogin.push(store);
      alert("login user");
    }
    emailinput.value = "";
    passinput.value = "";
    createuser();
    save();
  }
});

function createuser() {
  ulist.innerHTML = "";

  userlogin.forEach((item, index) => {
    const list = document.createElement("li");
    list.innerHTML = `Email: ${item.email}
    <button onclick="edituser(${index})">edit</button>
     <button onclick="deluser(${index})">del</button>`;

    ulist.appendChild(list);
    save();
  });
}
function edituser(index) {
  const userstore = userlogin[index];
  emailinput.value = userstore.email;
  passinput.value = userstore.pass;
  forget = index;
  save();
}

function deluser(index) {
  userlogin.splice(index, 1);
  alert("delete user login");
  createuser();
  save();
}

function save() {
  localStorage.setItem("storedata", JSON.stringify(userlogin));
}
