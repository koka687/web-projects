let day = 18;       
let month = 4;     
let year = 2026;    
let Weather = "sunny";

console.log("Добрий день! Сьогодні " + day + "." + month + "." + year);

console.log("Погода на сьогодні: " + Weather);


let x = 50;
let y = 10;
console.log("Сума x та y: ", x + y);
let d = x * y;
console.log("Значення d (x * y): ", d);

let firstName = "Анна", lastName = "Заворотня", age = 18;
d /= y;    
x -= d;  
age += x;  
console.log(firstName + " " + lastName + " " + age);

if (age >= 18) {
    console.log("студент повнолітній");
} else {
    console.log("студент неповнолітній");
}
age = "18"; 
console.log("Результат age == 18: ", age == 18);
console.log("Результат age === 18: ", age === 18);
let N = 8; 
let limit = 10 * N;

console.log("Непарні числа від 1 до " + limit + ":");
for (let i = 1; i <= limit; i++) {
    if (i % 2 !== 0) { 
        console.log(i);
    }
}