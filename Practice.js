
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




// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// if ((num1) && (num2)) {
   
//     let sum = num1 + num2;

//     alert("The sum is: " + sum);
// } else {
    
//     alert("Invalid inpu.");
// }



// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers);

// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// console.log("Logging each element:");
// numbers.forEach((num) => console.log(num));
// console.log("HELLO JAVASCRIPT");

  
    // // Get the heading element by its ID
    // var myHeading = document.getElementById('myHeading');

    // // Get the button element by its ID
    // var changeTextButton = document.getElementById('changeTextButton');

    // // Function to change the text of the heading
    // function changeText() {
    //   myHeading.textContent = 'Text changed!';
    // }

    // // Attach an event listener to the button
    // changeTextButton.addEventListener('click', changeText);
  


//Selection sort
//     function selectionSort(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;

//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         if (minIndex !== i) {
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }

//     return arr;
// }

// let unsortedArray = [64, 25, 12, 22, 11];
// let sortedArray = selectionSort(unsortedArray);
// console.log("Sorted array:", sortedArray);


// JAVASCRIPT PRACTICE QUESTIONS
// Declare a variable 'temperature' and assign a numerical value to it.
// Write an if statement that logs "It's hot!" if the temperature is greater than or equal to 30, and "It's cool." otherwise.

// var temperature = 25;
// if (temperature >= 30) {
//     console.log("Temperature is Hot");
// } else {
//     console.log("Temperature is Cold");
// }
// console.log(temperature);




// Use a for loop to log the numbers from 1 to 5 in the console.

// for (let i = 1; i <= 5; i++)
// {
//     console.log(i);
// }


// Create an object called 'person' with properties 'name' and 'age'.
// Set the 'name' property to "Alice" and the 'age' property to 25.
// let person = {
//     Name: "SHOYEBAKTAR SHIROL",
//     Age: 22,
//     College: "KLE SOCIETYS COLLEGE OF BCA GOKAK",
//     Course: "BACHELOR OF COMPUTER APPLLICATION",
//     Place: "GOKAK"
    
// };

// for (let key in person) {
//     console.log("Keys in the Person:", key);
// }
// for (let key in person) {
//     console.log("Values in the Person:", person[key]);
// }


// Write a function called 'isPositive' that takes a number as a parameter and returns true if the number is positive, false otherwise.
// Use the function to determine if the numbers 5, -3, and 0 are positive.

// function isPossitive(number)
// {
//     return number > 0;
// }

// console.log("isPossitive", (5));;
// console.log("isPossitive", (-3));;
// console.log("isPossitive", (0));;



//calculating the sum of num and lenght of tha numbers in array
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
  
// }

// console.log(numbers.length);


// Create an object called 'student' with properties 'name', 'age', and 'grade'.
// Set the values to "Emma", 18, and 85 respectively.
// Write an if-else statement to log "Pass" if the grade is 70 or above, and "Fail" otherwise.
//  let student = {
//      Name: "Shoyebaktar Shirol",
//      Age: 21,
//      grade: "85"
//  }
//  if (grade => 70)
//  {
//      console.log("STUDENT IS PASS");
//  }
//  else {
//      console.log("STUDENT IS FAIL");
//  }



// Create an object called 'user' with properties 'name', 'email', and 'isAdmin'.
// Write a function called 'isAdminCheck' that takes a user object as a parameter and returns true if the user is an admin, false otherwise.
// Test the function with the 'user' object.
// let user = {
//     name: "Shoyebaktar",
//     email: "shoyebaktarshirol@gmail.com",
//     isAdmin: false
// };

// function isAdminCheck() {
//     if (user.isAdmin === false) {
//         console.log("USER IS NOT A ADMIN");
//     } else {
//         console.log("USER IS  AN ADMIN");
//     }
// }

// isAdminCheck();

//   FACTORIAL IN JS
// function factorial(n) {
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }

// const userInput = prompt("Enter a number:");
// const number = parseInt(userInput);

// if (isNaN(number)) {
//   console.log("Invalid input. Please enter a valid number.");
// } else {
//   const result = factorial(number);
//   console.log(`The factorial of ${number} is: ${result}`);
// }



//DOCUMENT OBJECT MODEL

//FACTORIAL OF GOVEN NUMBER in JS

// function factorial(n) {
//   // Base case: factorial of 0 is 1
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
 
//     return n * factorial(n - 1);
//   }
// }
// let userInput = prompt("Enter a number to calculate its factorial:");
// let number = parseInt(userInput);
// if (isNaN(number)) {
//   console.log("Invalid input. Please enter a valid number.");
// } else {
//   let result = factorial(number);
//   console.log("Factorial of", number, "is:", result);

//Create a H2 heading element with text - "Hello JavaScript".Append"From apna collge Student To this text using JAVASCRIPT
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " From Apna College Student";



//Create 3 divs with common class name "box" and access the and add some Unique text to each of them
// let divs = document.querySelectorAll(".box");
// divs[0].innerText = " SHOYEBAKTAR ";
// divs[1].innerText = " SHIROL ";
// divs[2].innerText = " FROM GOKAK ";
// let div = document.querySelector("div");
// console.log(div);
// div.style.fontSize = "30px";

// DOM MANUPULATIONS
// let newBtn = document.createElement("button");
// newBtn.innerText = "CLICK HARE";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerText = "<i>HELLO THIS IS (DOM)</i> ";
// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();


// Practice quetion in JS
// create a button element.give it a text "DOM", background color red and text color as white in js
// let newBtn = document.createElement("button");
// newBtn.innerText = "DOM";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// document.body.appendChild(newBtn);


// let para = document.querySelector("p");
// para.getAttribute("class");
// para.setAttribute("class", "newClass");

//EVENTS IN JAVASCRIPT

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 Was Clicked");
// };




// const student = {
//     FullName: "Shoyebaktar Shirol",
//     College: "Kle Societys college of bca gokak",
//     CGPA: 8.53,
//     printDetails: function () {
//         console.log("College: ", this.College); //this keywor use to accessing the property
//         console.log("CGPA: ", this.CGPA);
//     }
// }
// student.printDetails();



// let arr = ["A", "B", "C", "D"];
// console.log(arr);


// //Classes and Objects in javaScript

// class Person {
// //  Cunstructor is a specieal type of member function use to initilize onjrcts
//   constructor(name, age , Studiying , college) {
//     this.name = name;
//       this.age = age;
//       this.Studiying = Studiying;
//       this.college = college;

//   }

//  //method name is greet
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and persuing ${this.Studiying} from ${this.college}`);
//   }
// }


// const person1 = new Person('Shoyebaktar Shirol', 21 , "Bachelor of computer application","Kle Society's College of Bca Gokak");

// person1.greet();




// function demo() {
//   console.log("Hello World");
//   console.log("We are Learning js")
// }
// demo();

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(10, 20));


// function demo(msg) {
//   console.log(msg);
// }
// demo("I love js ");


// function add(num1, num2) {
//   return num1 + num2;
//   console.log(num1 + num2);
// }
// add(20, 99)
 

// # ARROW FUNCTIONS

// function sum(a, b)
// {
//   return a + b

// }


// const arroSum = (a, b) => {
//   console.log(a+b)
// }
// function mul(a, b) {
//   return a * b;
// }


// const arroMul = (a, b) => {
//   console.log(a * b);
// }



// function countVowel(str) {
//   let count = 0;
//   for(const char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//       count++;
//     }
//   }
//   console.log(count);
// }

// countVowel("Shoyebaktar Shirol");



// const countVowel = (str) => {
//   let count = 0;
//   for(const char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowel("Sameer ")
// let arr = [1, 2, 4, 5, 6, 7, 8, 9,10];
// arr.forEach(function printVal(val) {
//   console.log(val);
// });


// let num = [1, 2, 3, 4, 5, 6];
// num.forEach((num) =>
// {
//   console.log(num * num);
// })





//map function in js
// let arr = [1, 2, 3, 4, 5, 6,7,8,9];
// arr.map((val) =>{
//   console.log(val);
// })






//filter function in js
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = num.filter((val)=>{
//   return val % 2 == 0;
// })
// console.log(even);


//reduce method
  



  //return  the value only one
// let marks = [99, 98, 97, 78, 89, 66];
// let topper = marks.filter((val) => {
//   return val >= 99;
// })
// console.log(topper);






// # map returns the true or false only
// let num = [99, 98, 97, 78, 89, 66];
// let tpr = num.map((val) => {
//   return val >= 99;
// })
// console.log(tpr);


// let num = [99, 98, 97, 78, 89, 66];
// let tpr = num.reduce((val) => {
//   return val >= 99;
// })
// console.log(tpr);



let n = prompt("Enter the number :")
let arr = [];

for (i = 1; i <= n; i++){
  arr[i-1] = i;

}
console.log(arr)