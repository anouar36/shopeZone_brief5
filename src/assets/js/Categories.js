
let fileJson = "../../../DataBase/cart.json";

fetch(fileJson)
  .then((response) => response.json())
  .then((data) => {
    const Allcards = document.getElementById("allCard");
    data.products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
                          <div class="card1 w-64 flex flex-col rounded justify-stretch">
                        <img src="${product.image}" alt="pic1"
                            class="rounded h-60">
                        <p>${product.description}</p>
                        <div class="flex items-center">
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out
                                of</p>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                        </div>
                        <p class="text-sm">${product.bought}</p>
                        <p class="text-3xl font-bold"><del>${product.old_price}</del></p>
                        <p class="text-3xl font-bold">${product.new_price}</p>
                        <p>Delivery <strong>${product.delivery}</strong></p>
                        <p>Ships to Morocco</p>
                        <div class="flex place-content-around">
                            <button id="btn-add" type="button"
                                class="btn bg-emerald-950 w-32 focus:outline-none text-white hover:bg-teal-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add
                                to cart</button>
                            <a href="#"><img id="likely"
                                    src="/src/assets/images/love.png"
                                    alt="love" class="w-8 h-8"></a>
                        </div>
                    </div>`;

      Allcards.appendChild(productDiv);
    });
  })
  .catch((error) => console.error("Error loading JSON data:", error));









let productcounter = 0;
let counter = document.getElementById('countcart');
let Btn = document.getElementById('btn-add');
Btn.addEventListener('click', () => {
  productcounter++;
  counter.innerHTML = `<span>${productcounter}</span>`
});

let likecounter = 0;
let counter2 = document.getElementById('countcart2');
let love = document.getElementById('likely');
love.addEventListener('click', () => {
  likecounter++;
  counter2.innerHTML = `<span>${likecounter}</span>`
});


// -------------------


const Swipe = document.getElementById("Swipe");
const slides = Swipe.children;
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  Swipe.style.transform = `translateX(-${currentIndex * 100}%)`;
}


let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 3000);

Swipe.addEventListener("mouseenter", () => clearInterval(autoSlide));
Swipe.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 3000);
});


// ------------------
