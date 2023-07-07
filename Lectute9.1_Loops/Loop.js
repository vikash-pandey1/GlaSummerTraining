
// // loops in js
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // array in js
// let todo = ['arr', 'len', 'heigh', 'width'];
// for (let i = 0; i < todo.length; i++) {
//     console.log(todo[i]);
// }

// // for of(array) in js 

// let arr = ['vikash', 'vinay', 'bk', 'aman'];
// for (let i of arr) {
//     console.log(i);
// }

// // for in(obj) in js

// let obj = {
//     web: 80,
//     c: 70,
//     math: 95,
//     hindi: 40
// }

// for (let i in obj) {
//     //console.log(i);
//     console.log(obj[i])
// }

// break and continue
let arr = [90, 80, 70, 60, 50, 40, 30, 20, 10];
//way-1
for (let i of arr) {
    if (i == 40) {
        break;
    }
    console.log(i)
}
// way-2
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 40) {
        continue;
    }
    console.log(arr[i]);
}