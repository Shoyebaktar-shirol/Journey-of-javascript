
// let myString = "Hello, World!";
// console.log(myString);


// let myNumber = 42;
// console.log(myNumber);

// // Declare and log a boolean
// let isTrue = true;
// console.log(isTrue);





// Arithmeti  Operators
// let num1 = 10;
// let num2 = 5;

// console.log("Arithmetic Operators:");
// console.log("Addition:", num1 + num2);
// console.log("Subtraction:", num1 - num2);
// console.log("Multiplication:", num1 * num2);
// console.log("Division:", num1 / num2);
// console.log("Modulus:", num1 % num2);
// console.log("Increment:", ++num1);
// console.log("Decrement:", --num2);

// // Comparison Operato
// let x = 5;
// let y = "5";

// console.log("\nComparison Operators:");
// console.log("Equal (==):", x == y);
// console.log("Strict Equal (===):", x === y);
// console.log("Not Equal (!=):", x != y);
// console.log("Strict Not Equal (!==):", x !== y);
// console.log("Greater Than (>):", x > num2);
// console.log("Less Than (<):", x < num2);
// console.log("Greater Than or Equal (>=):", x >= num2);
// console.log("Less Than or Equal (<=):", x <= num2);

// // Logical Opeators
// let isTrue = true;
// let isFalse = false;

// console.log("\nLogical Operators:");
// console.log("AND (&&):", isTrue && isFalse);
// console.log("OR (||):", isTrue || isFalse);
// console.log("NOT (!):", !isTrue);

// // Assignmet Operators
// let a = 3;

// console.log("\nAssignment Operators:");
// a += 2;
// console.log("+=:", a);
// a -= 2;
// console.log("-=:", a);
// a *= 3;
// console.log("*=:", a);
// a /= 2;
// console.log("/=:", a);
// a %= 2;
// console.log("%=:", a);

// // Bitwise Operators
// let num3 = 5;
// let num4 = 3;

// console.log("\nBitwise Operators:");
// console.log("AND (&):", num3 & num4);
// console.log("OR (|):", num3 | num4);
// console.log("XOR (^):", num3 ^ num4);
// console.log("Left Shift (<<):", num3 << 1);
// console.log("Right Shift (>>):", num3 >> 1);

// // Ternary Operator
// let age = 20;
// let eligibility = age >= 18 ? "Eligible" : "Not Eligible";

// console.log("\nTernary Operator:");
// console.log("Eligibility:", eligibility);


// // Conditional statemet using if-else
// let x = 10;

// if (x > 5) {
//     console.log("x is greater than 5");
// } else {
//     console.log("x is not greater than 5");
// }


// // Switch statement for day of the week
// let dayOfWeek = 3;
// let dayName;

// switch (dayOfWeek) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     // ... other cases ...
//     default:
//         dayName = "Unknown";
// }

// console.log("Day of the week is: " + dayName);





// // For loop for iterations
// for (let i = 0; i < 5; i++) {
//     console.log("Iteration number: " + i);
// }


// // While loop for counting
// let count = 0;

// while (count < 5) {
//     console.log("Count: " + count);
//     count++;
// }


// // ForEach loop for array elements
// let fruits = ["Apple", "Banana", "Orange"];

// fruits.forEach(function (fruit) {
//     console.log("Fruit: " + fruit);
// });


// let items = [250, 645, 300, 900, 50];//length is 5
// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;

// }

// console.log(items);

// //push and pop( ) using tostring() examples
// let fruit1 = ["Potato", "Apple", "Banana", "Kiwi"];
// console.log(fruit);
// fruit.push("lemon"); // adding new elements at the End using push()
// console.log(fruit);
// fruit.pop("lemon"); // deleted the last item calle lemon using pop()
// console.log(fruit);

// let fruit2 = ["Potato", "Apple", "Banana", "Kiwi"];
// console.log(fruit); console.log(fruit.toString);


// // concatenation of two array
// let fruit6 = ["Potato", "Apple", "Banana", "Kiwi"];
// let fruit7 = ["A", "B", "C", "D"];
// let fruit8 = ["E", "F", "G", "H"];
// let fruit4 = ["I", "J", "K", "L"];

// let result = fruit1.concat(fruit2, fruit3, fruit4);

// console.log(result);


// let fruit = ["Potato", "Apple", "Banana", "Kiwi"];

// console.log(fruit);

// // Adding a new element at the start using unshift()
// fruit.unshift("Lemon");
// console.log(fruit);

// // Deleting the first element (which is now "Lemon") using shift() method
// fruit.shift();
// console.log(fruit);

// let fruits = ["Apple", "Banana", "Watermilon", "Kiwi", "Lemon"];
// console.log(fruits);
// console.log(fruits.slice());


// let fruit2 = ["Apple", "Banana", "Watermilon", "Kiwi", "Lemon", "Grapes"];
// console.log(fruit2);
// console.log(fruit2.splice(1, 2));

// let company = ["Bloomberg", "Microsoft", "Google", "Apple", "Netflix", "Amazon"];

// // Remove the first element
// company.shift();

// // Replace "Apple" with "Uber" at index 2 position
// company.splice(2, 1, "Uber");

// console.log(company);

// // Add "Apple" to the end of the array
// company.push("Apple");
// console.log(company);
// company.pop("Apple")
// console.log(company);



//FUNCTIONS OR METHODS IN JAVASCRIPT
// function myfunction()
// {
//     console.log("THIS IS MY FRIST FUNCTION IN JAVASCRIPT");
// }
// myfunction();//calling function

// function myfunction2(hello)//parameter passsed
// {
//     console.log(hello);
// }
// myfunction2("HELLO THIS MY ANOTHER FUNCTION");//parameter or arguments value passed




// // sum of 2 numbers
// function sum(a, y) {
//     console.log(a + y);
// }

// sum(100, 100);


// //arrow functions => in Javascript
// function sum(a, b) {
//     return a + b;
// }

// const arrowsum = (a, b) => {
//     return a + b;
// };

// function mul(a, b) {
//     return a * b;
// }

// const arrowmul = (a, b) => {
//     return a * b;
// };
// console.log(arrowsum(5, 6));
// console.log(arrowmul(4, 8));


// Function to count vowels in a given string
// function countvowels(str) {
//     // Initialize a counter to keep track of the number of vowels
//     let count = 0;

//     // Iterate through each character in the input strin
//     for (const char of str) {
//         // Check if the current character is a vowel (case-sensitive)
//         if (char === "a" || char === "e" || char === "i" || char === "O" || char === "u") {
//             // If it's a vowel, increment the counter
//             count++;
//         }
//     }

//     // Log the final count o vowels in the string
//     console.log(count);
// }

// // Example usage of the countvowls functon with a comment
// countvowels("I AM SHOYEBAKTAR SHIROL FROM KLE BCA GOKAK"); // Output: 15


//for Each loop or Higher order function.forEachloop
// let arr = ["Mumbai","Hydrabad", "Kerala","Pune", "Bengaluru"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });

// let num = [2, 3, 4, 5, 6];
// num.forEach((num) => {        //forEach accep[t the 3 parameters to perform operations .
//     // Calculate the square of each number
//     let result = num * num;
//     console.log(result);
// });

//array Methods
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenarr= arr.filter((val) => {
//     return val % 2 == 0; // logic of printing the even nums
// });
// console.log(evenarr);


//reduce method in js with array,
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const output = arr.reduce((previous, currentValue) => {
//     return previous + currentValue;
// }, 0);

// console.log(output);

// let marks = [55, 66, 77, 88, 99];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });

// console.log(toppers);




// Prompt the user for the first nuber
let num1 = prompt("Enter the first number:");

// Prompt the user for the second number
let num2 = prompt("Enter the second number:");

// Convert the inpt to numbers
num1 = parseInt(num1);
num2 = parseInt(num2);

// Check if the input is valid or no
if (!isNaN(num1) && !isNaN(num2)) {
    // Calculate the sum
    let sum = num1 + num2;

    // Display the result
    alert("The sum is: " + sum);
} else {
    
    alert("Invalid input. Please enter valid numbers.");
}
