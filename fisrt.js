/*const student = {
       fullname:"saikiran",
       age:20,
       cgpa:8.3,
       isPass:true, 
};

console.log(student["cgpa"]);
 */
2/*for(let i=1;i<=5;i++)
       {
              console.log("apna college");
       }
*/
3/*let heroes =["ironman","hulk","thor","batman"];

let marks = [96,75,48,83,66];

let info = ["rahul",86,"Delhi"];

console.log(let marks);*/

4/*const array1=[1,2,3,4];
const initialvalue = 0;
const sumWithInitial  =array1.reduce(
       (accumulator,currentvalue)=>accumulator + currentvalue,
       initialvalue);

console.log(sumWithInitial);*/

/*// Prompt the user to enter a number
let userInput = prompt("40");

// Convert userInput to a number
let number = Number(userInput);

// Check if the input is a valid number
if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Check if the number is a multiple of 5
    if (number % 5 === 0) {
        console.log(number + " is a multiple of 5.");
    } else {
        console.log(number + " is not a multiple of 5.");
    }
}*/


6./*// Prompt the user to enter a score
let score = prompt("Enter the student's score:");

// Convert score to a number
score = Number(score);

// Check if the input is a valid number
if (isNaN(score)) {
    console.log("Invalid input. Please enter a valid score.");
} else {
    // Determine the grade based on the score range
    let grade;
    if (score >= 80 && score <= 100) {
        grade = "A";
    } else if (score >= 70 && score <= 79) {
        grade = "B";
    } else if (score >= 60 && score <= 69) {
        grade = "C";
    } else if (score >= 50 && score <= 59) {
        grade = "D";
    } else if (score >= 0 && score <= 49) {
        grade = "F";
    } else {
        console.log("Score out of range. Please enter a score between 0 and 100.");
    }

    // Output the grade
    if (grade) {
        console.log("The student's grade is: " + grade);
    }
}*/
 7./*const product ={
       title:"bell pen",
       rating:4,
       offer:5,
       price:270,

 };
 console.log(product);
 */
const profile ={

    username :"saikiran",
    isFollow:false,
    followers:123,
    following:123,
};
console.log(typeof profile["following"]);
