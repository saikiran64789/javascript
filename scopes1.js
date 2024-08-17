/*console.log(x);
var x = 25;
console.log(x);
console.log(a);*/


/*//case 1
function a(){
console.log(b);    
}
var b = 10;
a ();*/

//case 2
/*function a(){
c();
function c(){
    console.log(b);
    }
}
var b = 10;
a();*/

/*//case 3
function a(){
    c();
    function c(){
        var b = 100;
        console.log(b);
    }
}
var b = 10;
a(); */

//case 4
function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}
a();
console.log(b);
