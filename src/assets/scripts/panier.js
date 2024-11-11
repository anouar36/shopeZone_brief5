const counterPanier = document.getElementById("counterPanier");
const productList = document.getElementById("product-List");
let count = 0;
let products ;
let produit;
let panier;
// Charger les produits depuis le fichier JSON
fetch("../../file.json")
  .then((response) => response.json()) // Convertir la réponse en JSON
  .then((data) => {
    products = data.products; // Assigner les produits à la variable Produits    
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération du fichier JSON:", error);
  });

// Fonction pour ajouter un produit au panier
function addProduct(productId) {
  panier = JSON.parse(localStorage.getItem("panier")) || [];
  localStorage.getItem("count");
  const produit = products.filter((el) => el.id === productId)[0]; 
  if (produit) {
    const produitExist = panier.find((item) => item.id === produit.id);
    if (produitExist) {
      console.log(produitExist);
    } else {
      panier.push({...produit });
      count++;
      counterPanier.textContent = count;
    }
    localStorage.setItem("panier", JSON.stringify(panier));
  
    
  }
}
panier = JSON.parse(localStorage.getItem("panier"));

if (!panier) {
  productList.innerHTML="no pruducts added to the cart!"
} else {
  panier.forEach((el) => {
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
              el.price
            }</span>
              <div class="flex items-center space-x-4">
                <input type="number" value="1" min="1" class="w-16 h-10 text-center border rounded-md text-gray-800" />
                <button class="text-red-500 hover:text-red-700 font-semibold" onclick="removeProduct(event)">Supprimer</button>
              </div>
            </div>
            </div>
            `;
    productList.appendChild(productElement);
  });
}




// // Fonction pour supprimer un produit du panier
// function removeProduct(event) {
//   const productElement = event.target.closest(".bg-white");
//   if (productElement) {
//     productElement.remove();
//     count--;
//     counterPanier.textContent = count;

//   }
// }
