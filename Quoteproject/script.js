const button = document.getElementById("addtasks");
const list = document.getElementById("tasklists");
const toggleMode = document.getElementById("toggleMode");

button.addEventListener("click", () => {
  async function getQuotes() {
    try {
      const res = await fetch("https://dummyjson.com/quotes");
      const data = await res.json();

      const randomquote = Math.floor(Math.random() * data.quotes.length);
      const quote = data.quotes[randomquote];

      const listItem = document.createElement("li");

      listItem.textContent = `"${quote.quote}" - ${quote.author}`;

      //   list.innerHTML = ""; // Clears old quotes

      list.appendChild(listItem);
    } catch (err) {
      console.error("Error:", err);
    }
  }

  getQuotes();
});

toggleMode.addEventListener("click", () => {
  list.classList.toggle("dark-mode");
});
