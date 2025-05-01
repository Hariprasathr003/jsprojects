const month = document.getElementById("month");
const cata = document.getElementById("cata");
const amount = document.getElementById("amount");
const list = document.getElementById("list");
const button = document.getElementById("button");
const filter = document.getElementById("filter");
const cmonth = document.getElementById("cmonth");
const clist = document.getElementById("clist");
const catag = document.getElementById("catag");

const data = [];

button.addEventListener("click", addFunction);

function addFunction() {
  const month1 = month.value.trim();
  const cata1 = cata.value.trim();
  const amount1 = parseInt(amount.value.trim());

  if (month1 && cata1 && !isNaN(amount1)) {
    data.push({ month: month1, cata: cata1, amount: amount1 });

    const store1 = document.createElement("li");
    // console.log(cata, "1111");

    store1.innerHTML = `Month is ${month1} the Catagory is  ${cata.value} and total amount is  ${amount1}`;

    list.appendChild(store1);

    month.value = "";
    cata.value = "";
    amount.value = "";
  }
}

filter.addEventListener("click", filterfunction);

function filterfunction() {
  const selecte = cmonth.value.trim();
  const catagory = catag.value.trim();
  if (!selecte) {
    return alert("choose date");
  } else {
    const filterdata = data.filter(
      (val) => val.month === selecte && val.cata === catagory
    );
    const total = filterdata.reduce((acc, val) => acc + val.amount, 0);

    clist.innerHTML = `Current Month ${selecte} and product is ${catagory}  Total :  ₹ ${total}`;
  }
}
