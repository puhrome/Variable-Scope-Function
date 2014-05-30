/**
 * Variable Scope Created by puhrome on 5/29/14.
 */
function outptMsg(){
    console.log("Hello World");
}
//not occurring unless they are called
//you must invoke
//function definition
//function call

var width = 5;//scope outside of the function

function calcArea(){//scope to calc area
    var height = 20;
    var width = 30;
    var area = width * height;
    console.log(area);
}
console.log(width);//prefer to use variable outside of the function width = 5
calcArea();//calling the function
calcArea();//calling it more than once, making it repeatable
