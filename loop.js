/*for(let count  = 1; count <=44546789; count++)
{
    console.log("saikiran");
}
console.log("saikiran");*/
//calculate sum of 1 to 5
/*let sum = 0;
for(let i = 1;i<=5;i++)
{
    sum = sum + i;
}
console.log("sum =", sum);
console.log("loop has ended");*/
//print 1 to 5
/*for(let i = 1 ; i <= 5; i++){
    console.log("i = ", i);
}*/
//print 1 to 5 infinite loop
/*for(let i = 1; i>=0;i++)
{
    console.log("i=", i);
}*/
/*let i = 1;
while(i<= 5)
{
    console.log("saikiran");
    i++;
}*/
/*let i = 20;
do{
    console.log("saikiran");
    i++;
}while(i<=10);*/
//for-0f loop
/*let str = "saikiran";

for(let i of str)
{
    console.log("i=",i);
}*/

//for-of loop
/*let str ="javascript";
let size =0;
for(let i of str)
{
    console.log("i=",i);
    size++;
}
console.log("string size =",size);
*/
/*let student = {
    name:"saikiran",
    age : 30,
    cgpa:7.8,
    isPass:true
};

for(let i in student)
{
    console.log(i);
}*/
//practice qs1
/*for (let num = 0;num<=100;num++)
{
    if(num %2 === 0){
        //even number
        console.log("num =",num);
    }
   
}*/
/*let gameNum = 25;
let userNum = prompt("guess the game number :");

while(userNum != gameNum)
{

    userNum = prompt("you entered wrong number.guess again");

}
console.log("congratulation,you entered the right number");*/
//strings
//Strings
/*let str = "ApnaCollege";
console.log(str[1]);*/
/*let obj = {
    item:"open",
    price: 10,
};



console.log("the cost of",obj.item,"is",obj.price,"rupees");
//template literals
let specialString = "this is a template literal";
console.log(typeof specialString);*/
//srting method
/*let str = "saikiran";
str.toLocaleUpperCase();
console.log(str);*/
//str..trim
/*let  str="  saikiran     js";
console.log(str.trim());*/
//str1.concat(str2)
/*let str1 = "sai";
let str2 = "kiran";

let res = str1.concat(str2);
console.log(res);*/

/*let fullName = prompt("enter your fullName without spaces");
let username = "@"+fullName+fullName.length;
console.log(username);*/
/*let marks = [97,82,75,64,36];
console.log(marks);*/
/*let heroes = ["ironman","thor","hulk","shaktiman","spiderman",];
for (let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}*/
//Loops for
/*let heroes = ["ironman","thor","hulk","shaktiman","spiderman",];
for(let hero of heroes){
    console.log(hero);
}*/
//problem
let marks = [85,97,44,37,76,60];

let sum = 0;

for (let val of marks){
    sum += val;
}

let avg = sum/ marks.length;

console.log('avg marks of the class = ${avg}');





