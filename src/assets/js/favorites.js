var slider_img = document.querySelector(".slider-img");
var imges = ["slider (2).jpg", "slider (3).jpg", "slider.jpg"];
var i = 0;
function prev() {
  if (i <= 0) i = imges.length;
  i--;

  return setimge();
}

function next() {
  if (i >= imges.length - 1) i = -1;
  i++;

  return setimge();
}

function setimge() {
  return slider_img.setAttribute("src", "../assets/images/" + imges[i]);
}





const mostPopPorducts = document.querySelector("#aa")
const jsonFile ="/src/assets/file(1).json";

 fetch(jsonFile).then((respone) => {
  return respone.json(); 
 }).then( data => {
  data.products.map(product => {
    const { id ,name, price , images} = product;
    mostPopPorducts.innerHTML += `
     <div class="w-44 pt-3 h-[320px] bg-red-800 mb-8"  id="${id}">
        <img class="w-40 m-auto "  src="" alt="${name}">
        <h1 class="text-xl font-mono">${name}</h1>
        <p class="text-sm font-sans w-44 h-14 flex-wrap "></p>
        <h3 class=" w-2/4">PRIX= "${price}" </h3>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full relative bottom-8  ml-28">
            love
          </button>
        </div>`
  })
 }) 

  


.then(function(data){
  localStorage.setItem("products", JSON.stringify(data.products));
  if(!localStorage.getItem("cart")){
    localStorage.setItem("cart", "[]");
  }
});

// let product = JSON.parse(localStorage.getItem("products"));
// let cart =JSON.parse(localStorage.getItem("products"));

// function addItemtocarat(productId){
//   let product=product.find(function(product){
//     return product.id == productId;
//   });
//   if(cart.length==0){
//         cart.push(product);
//   }else{
//     let res =cart.find(element => element.id == productId);
//     if(res === undefined){
//       cart.push(product);
//     }
//   }
//  localStorage.setItem("cart",JSON.stringify(cart));
// }
// addItemtocarat(1);