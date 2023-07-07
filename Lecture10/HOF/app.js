// case no1
// function a(fn){
//     console.log("inside a");
//     fn();
// }

// function b(){
//     console.log("inside b");
// }
// a(b)

// case 2
// function a(){
//     function b(){
//         console.log("inside b");
//     }
//     console.log("inside a");
//     return b;
// }
// let temp = a();
// temp();
// or 
//a()();


// call back function
function check(a,fn){
    return fn(a);
}
function checkofBool(num){
    return typeof num == "boolean";
}
function checkofnum(num){
    return typeof num == "number";
}
console.log(check(true,checkofnum));
console.log(check(34,checkofnum))