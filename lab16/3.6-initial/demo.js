//1.1 
/* let products = [
  { name: "Samsung J5 2017", screen: 5.2, price: 5400, weight: 160 },
  { name: "iPhone X", screen: 5.8, price: 25000, weight: 170 },
  { name: "Xiaomi Mi 4", screen: 5.5, price: 4999, weight: 150 },
  { name: "Nokia 3310 2018", screen: 2.4, price: 999, weight: 60 },
  { name: "iPhone 7", screen: 4.7, price: 9999, weight: 140 }
];

let minPrice = 2000;
let maxPrice = 10000;

/* let filteredProducts = [];

for (let i = 0; i < products.length; i++) {

    if (products[i].price >= minPrice && products[i].price <= maxPrice) {

        filteredProducts.push(products[i]);
    }
}

console.log("Результати фільтрації (класичний for):");
console.log(filteredProducts); */


//1.2
/*let filteredWithOf = [];

for (let product of products) {
    if (product.price >= minPrice && product.price <= maxPrice) {
        filteredWithOf.push(product);
    }
}

console.log("Результати фільтрації (цикл for-of):");
console.log(filteredWithOf);*/

//2.1
let trips = [
    { city: "Київ", duration: 2, price: 2000, foodIncluded: false, guide: true },
    { city: "Харків", duration: 1, price: 4500, foodIncluded: true, guide: false },
    { city: "Одеса", duration: 2, price: 5500, foodIncluded: true, guide: true },
    { city: "Дніпро", duration: 1, price: 2000, foodIncluded: false, guide: true },
    { city: "Полтава", duration: 1, price: 3000, foodIncluded: false, guide: false },
    { city: "Львів", duration: 2, price: 6000, foodIncluded: true, guide: true }
];

let shortTripsNoFood = [];
let budgetTrips = [];

for (let trip of trips) {
    if (trip.duration === 1 && trip.foodIncluded === false) {
        shortTripsNoFood.push(trip);
    }
    
    if (trip.price <= 3000) {
        budgetTrips.push(trip);
    }
}

console.log("1. Одноденні подорожі без харчування:");
console.log(shortTripsNoFood);

console.log("2. Подорожі ціною до 3000 включно:");
console.log(budgetTrips);