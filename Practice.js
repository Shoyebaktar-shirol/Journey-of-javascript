






// let myString = "Hello, World!";
// console.log(myString);


// let myNumber = 42;
// console.log(myNumber);

// // Declare and log a boolean
// let isTrue = true;
// console.log(isTrue);


// // Conditional statement using if-else
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
function countvowels(str) {
    // Initialize a counter to keep track of the number of vowels
    let count = 0;

    // Iterate through each character in the input strin
    for (const char of str) {
        // Check if the current character is a vowel (case-sensitive)
        if (char === "a" || char === "e" || char === "i" || char === "O" || char === "u") {
            // If it's a vowel, increment the counter
            count++;
        }
    }

    // Log the final count o vowels in the string
    console.log(count);
}

// Example usage of the countvowls functon with a comment
countvowels("I AM SHOYEBAKTAR SHIROL FROM KLE BCA GOKAK"); // Output: 15
