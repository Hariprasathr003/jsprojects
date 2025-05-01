// Step 1: Debounce function
const res = document.getElementById("results");
const searchInput = document.getElementById("searchInput");

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Step 2: API search function
async function searchProducts(query) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    const data = await response.json();
    const ans = data.products[0];
    res.innerHTML = `${ans.title} - ${ans.description}`;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

const debouncedSearch = debounce(searchProducts, 300);

searchInput.addEventListener("input", (event) => {
  const query = event.target.value;
  debouncedSearch(query);
});

