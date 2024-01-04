






let myString = "Hello, World!";
console.log(myString);


let myNumber = 42;
console.log(myNumber);

// Declare and log a boolean
let isTrue = true;
console.log(isTrue);


// Conditional statement using if-else
let x = 10;

if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}



// Switch statement for day of the week
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    // ... other cases ...
    default:
        dayName = "Unknown";
}

console.log("Day of the week is: " + dayName);





// For loop for iterations
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}


// While loop for counting
let count = 0;

while (count < 5) {
    console.log("Count: " + count);
    count++;
}


// ForEach loop for array elements
let fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function (fruit) {
    console.log("Fruit: " + fruit);
});




let items = [250, 645, 300, 900, 50];//length is 5
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;

}

console.log(items);

//push and pop( ) using tostring() examples
let fruit1 = ["Potato", "Apple", "Banana", "Kiwi"];
console.log(fruit);
fruit.push("lemon"); // adding new elements at the End using push()
console.log(fruit);
fruit.pop("lemon"); // deleted the last item calle lemon using pop()
console.log(fruit);

let fruit2 = ["Potato", "Apple", "Banana", "Kiwi"];
console.log(fruit); console.log(fruit.toString);


// concatenation of two array
let fruit6 = ["Potato", "Apple", "Banana", "Kiwi"];
let fruit7 = ["A", "B", "C", "D"];
let fruit8 = ["E", "F", "G", "H"];
let fruit4 = ["I", "J", "K", "L"];

let result = fruit1.concat(fruit2, fruit3, fruit4);

console.log(result);








let fruit = ["Potato", "Apple", "Banana", "Kiwi"];

console.log(fruit);

// Adding a new element at the start using unshift()
fruit.unshift("Lemon");
console.log(fruit);

// Deleting the first element (which is now "Lemon") using shift() method
fruit.shift();
console.log(fruit);

