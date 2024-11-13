
const productList = document.getElementById("product-list");

let localPanier = JSON.parse(localStorage.getItem("panier"));
let localCounter = JSON.parse(localStorage.getItem("count"));

if (!localPanier) {
  productList.innerHTML = "no pruducts added to the cart!";
} else {
  localPanier.forEach((el) => {
    let productElement = document.createElement("div");
    productElement.setAttribute(
      "class",
      "bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6"
    );
    productElement.innerHTML = `
    <img class="w-32 h-32 object-cover rounded-lg" src="${el.image}" alt="${
      el.name
    }">
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-800">${el.name}</h3>
            <p class="text-sm text-gray-600">${
              el.description || "Une description courte du produit"
            }</p>
            <div class="flex items-center justify-between mt-4">
            <span class="text-lg font-semibold text-gray-800">€${
              el.new_price
            }</span>
              <div class="flex items-center space-x-4">
                <input type="number" value="1" min="1" class="w-16 h-10 text-center border rounded-md text-gray-800" />
                <button class="text-red-500 hover:text-red-700 font-semibold" onclick="removeProduct(${
                  el.id
                } )">Supprimer</button>
              </div>
            </div>
            </div>
            `;
    productList.appendChild(productElement);
  });
}



