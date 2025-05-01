const description = document.getElementById("description");
const amount = document.getElementById("amount");
const addbutton = document.getElementById("addbutton");
const totalbutton = document.getElementById("totalbutton");
const currectdescription = document.getElementById("currectdescription");
const ulist = document.getElementById("ulist");
const descriptionTotal = document.getElementById("descriptionTotal");
const totalincome = document.getElementById("totalincome");
const totalexpense = document.getElementById("totalexpense");
const balance = document.getElementById("balance");

let data = [];

addbutton.addEventListener("click", addTransaction);

function addTransaction() {
  const descriptions = description.value.trim();
  const amounts = parseFloat(amount.value.trim());

  if (descriptions && !isNaN(amounts)) {
    const transaction = {
      id: Date.now(),
      description: descriptions,
      amount: amounts,
    };

    data.push(transaction);
    renderList();
    update();
  } else {
    alert("Please enter valid description and amount.");
  }

  description.value = "";
  amount.value = "";
}

function renderList() {
  ulist.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
         ${item.description}: ₹${item.amount}
        <button onclick="deletexpense(${item.id})">Delete</button>
      `;
    ulist.appendChild(li);
  });

  update();
}

function deletexpense(id) {
  data = data.filter((item) => item.id !== id);
  renderList();
  update();
}

function update() {
  const income = data
    .filter((item) => item.amount > 0)
    .reduce((sum, item) => sum + item.amount, 0);

  const expense = data
    .filter((item) => item.amount < 0)
    .reduce((sum, item) => sum + item.amount, 0);

  totalincome.textContent = `Total Income: ₹ ${income}`;
  totalexpense.textContent = `Total Expense: ₹ ${Math.abs(expense)}`;
  balance.textContent = `Balance: ₹ ${income + expense}`;
}

totalbutton.addEventListener("click", calculateTotal);

function calculateTotal() {
  const descriptionSearch = currectdescription.value.trim();

  if (!descriptionSearch) {
    return alert("Enter a current description to calculate the total.");
  }

  const filtered = data.filter(
    (item) => item.description.toLowerCase() === descriptionSearch.toLowerCase()
  );

  const total = filtered.reduce((acc, item) => acc + item.amount, 0);

  descriptionTotal.innerHTML = `Current total for "${descriptionSearch}": ₹${total}`;
}
