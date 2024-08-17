1/*console.log("hello world!");*/
2/*let a = 5 ;
let b = 2 ;

console.log("a=",a,"&b=",b);
console.log("a + b =",a + b );
console.log("a-b = ", a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a * b =",a*b);*/
3//1unary operetar
/*let a=5;
let b=2;
console.log("a=",a,"&b=",b);
a++;
console.log("a=",a);
console.log("a++=",a++);
console.log("a=",a);
console.log("a--=",a--);
console.log("a--=",a--);
console.log("a=",a);
*/
4//Assignment operators
/*let a=5;
let b=2;
a-=4;
console.log("a=",a);
*/
5//llogical operator
/*let a=6;
let b=5;
//let cond1 = a > b;
//let cond2 = a ==== 6;
//console.log("cond1 && cond2 =",cond1 && cond2);
console.log("cond1 || cond2 =", a<b || a===b);
console.log("!(6<5) =",!(a<b));
console.log("!(6>5) =",!(a>b));*/
6//condition statements
/*let age=18;
if(age>=18)
{
    console.log("you can vote");
}
if(age<18)
{
    console.log("you cannot vote");
    
}*/
/*let mode="light";
let color;
if(mode ==="dark")
{
    color="black";
}
if(mode==="light")
{
    color="white";

}
console.log(color);*/
7//ex:-odd or even
/*let num=48;
if(num%2===0)
{
    console.log(num,"is even");

}
else{
    console.log(num,"is odd");
}*/
8//problems
/*let num= prompt("enter a number:");

if(num%5===0)
{
    console.log(num,"is a multiple of 5");
}
else{
    console.log(num,"is NOT a multiple of 5 ");
}*/
9//problem2
let score = 90;
let grade;

if(score >= 90 && score <= 100)
{
    grade ="A";
}else if (score >= 70 && score <= 89){
    grade ="B";
}else if (score >= 60 && score <= 69){
    grade ="C";
}else if (score >= 50 && score <= 59){
    grade ="D"; 
}else if (score >= 0 && score <= 49){
grade ="F";
}

console.log("according to your Scores,your grade was:",grade);