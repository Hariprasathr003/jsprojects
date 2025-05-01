const inputvalue = document.getElementById("area");
const button = document.getElementById("button");
const dropdown = document.getElementById("drop");
const ulist = document.getElementById("ulist");

button.addEventListener("click", () => {
  const input = inputvalue.value.trim();
  const inputvaluedrop = dropdown.value;

  if (input) {
    const list = document.createElement("li");
    const col1 = inputvaluedrop === "1" ? input : "";
    const col2 = inputvaluedrop === "2" ? input : "";
    const col3 = inputvaluedrop === "3" ? input : "";
    list.innerHTML = `
      ${input}
    <table>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
          <th>Col 3</th>
        </tr>
        <tr>
          <td>${col1}</td>
          <td>${col2}</td>
          <td>${col3}</td>
        </tr>
      </table>
    `;
    console.log(list, "llllllll");

    ulist.append(list);
  }

  inputvalue.value = "";
});
