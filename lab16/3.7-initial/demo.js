//3.1
// Функція 1: Повертає суму трьох чисел
/*function sum(a, b, c) {
    return a + b + c;
}
console.log("Результат функції sum: " + sum(10, 20, 30));

// Функція 2: Виводить привітання 
function sayHallo(name) {
    console.log("Привіт, " + name + "!");
}
sayHallo("Анна"); 

// Функція 3: Просто виводить число 42
function printSomeNumber() {
    console.log(42);
}
console.log("Виклик printSomeNumber:");
printSomeNumber();

console.log("-----------------------------------");



let storeProducts = [
    { name: "Samsung J5 2017", price: 5400},
    { name: "iPhone X", price: 25000},
    { name: "Xiaomi Mi 4", price: 4999},
    { name: "Чохол для iPhone X", price: 500}
];

let orderProducts = [
    { name: "iPhone X", price: 25000},
    { name: "Чохол для iPhone X", price: 500}
];

function calculateTotal(productsArray) {
    let totalSum = 0;
    
    for (let item of productsArray) {
        totalSum += item.price; 
    }
    
    return totalSum; 
}

let storeSum = calculateTotal(storeProducts);
let orderSum = calculateTotal(orderProducts);

console.log("На складі товарів на " + storeSum + " грн; Сума замовлення " + orderSum + " грн");*/



//4.1
let person = {
    firstName: "Анна",
    lastName: "Заворотня", 
    
    greet: function(otherName) {
        console.log("Привіт, " + otherName + "! Мене звати " + this.firstName + ".");
    },

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

person.greet("Марія");

console.log("Результат роботи getFullName: " + person.getFullName());