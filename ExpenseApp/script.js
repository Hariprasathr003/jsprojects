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
const month = document.getElementById("month");
const cmonth = document.getElementById("cmonth");
let data = [];

addbutton.addEventListener("click", addTransaction);

function addTransaction() {
  const month1 = month.value.trim();
  const descriptions = description.value.trim();
  const amounts = parseInt(amount.value.trim());

  if (month1 && descriptions && !isNaN(amounts)) {
    const transaction = {
      id: Date.now(),
      month: month1,
      description: descriptions,
      amount: amounts,
    };

    data.push(transaction);
    renderList();
    update();
  } else {
    alert("Please enter valid description and amount.");
  }
  month.value = "";
  description.value = "";
  amount.value = "";
}

function renderList() {
  ulist.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
          ${item.month} : ${item.description}: ₹${item.amount}
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
  const currentmonth = cmonth.value.trim();

  if (!descriptionSearch) {
    return alert("Enter a current description to calculate the total.");
  }

  const filtered = data.filter(
    (item) =>
      item.description === descriptionSearch && item.month === currentmonth
  );

  const total = filtered.reduce((acc, item) => acc + item.amount, 0);

  descriptionTotal.innerHTML = `Current month  ${currentmonth} - product "${descriptionSearch}" total: ₹${total}`;
}
