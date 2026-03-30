// 1. sayHi function
function sayHi() {
    console.log("Hi there!");
}
sayHi();

// 2. welcomeUser function
function welcomeUser(name) {
    console.log(`Welcome, ${name}`);
}
welcomeUser("Alice");
welcomeUser("Bob");
welcomeUser("Charlie");

// 3. sum function
function sum(a, b) {
    return a + b;
}
const result = sum(10, 20);
console.log(result);

// 4. calculateBMI function
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// 5. Arrow function - square
const square = (num) => console.log(num * num);
square(5);

// 6. Arrow function - checkMarks
const checkMarks = (marks) => {
    return marks >= 50 ? "Pass" : "Fail";
};
console.log(checkMarks(60));
console.log(checkMarks(40));

// 7. orderFood with callback
function orderFood(food, callback) {
    console.log(`Ordering ${food}`);
    callback();
}
orderFood("Pizza", () => console.log("Food delivered"));

// 8. setTimeout example
console.log("Start");
setTimeout(() => console.log("Loading complete"), 3000);
console.log("End");

// 9. Promise - checkPayment
const checkPayment = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Payment successful");
    } else {
        reject("Payment failed");
    }
});
checkPayment.then(msg => console.log(msg)).catch(err => console.log(err));

// 10. .map() - triple prices
let prices = [100, 200, 300, 400];
const tripledPrices = prices.map(price => price * 3);
console.log(tripledPrices);

// 11. .filter() - ages 18 and above
let ages = [12, 18, 25, 16, 30];
const adultAges = ages.filter(age => age >= 18);
console.log(adultAges);

// 12. .find() - first score > 70
let scores = [45, 67, 89, 32, 76];
const highScore = scores.find(score => score > 70);
console.log(highScore);
