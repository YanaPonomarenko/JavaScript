const cl = console.log;
const keys = "products";
//
const products = JSON.parse(localStorage.getItem(keys)) || [];

const form = document.getElementById("form-add");
const list = document.getElementById("products-list");
const clearBtn = document.getElementById("clear");

showProducts();

function showProducts() {
  list.innerHTML = "";

  products.forEach((item) => {
    list.innerHTML += `<p>${item.title} - ${item.price} грн</p>`;
  });
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    const index = products.findIndex(
      (item) => item.title.toLowerCase() === data.product.toLowerCase()
    );

    if (index !== -1) {
      products[index].price = data.price;
    } else {
      products.push({
        title: data.product,
        price: data.price,
      });
    }

    localStorage.setItem(keys, JSON.stringify(products));
    showProducts();
    form.reset();
  });
}

clearBtn.addEventListener("click", () => {
  localStorage.removeItem(keys);
  products.length = 0;
  showProducts();
});