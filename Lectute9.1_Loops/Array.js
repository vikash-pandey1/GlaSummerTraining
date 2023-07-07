let arr = ['vikash', 34, true, 'sfl']
console.log(arr)

// nested array 
let arry = ['vikash',35,53,9,353,['ram','shyam',['ramesh',38,'ram',['jadu']]]]
console.log(arry[5][2][3][0])

// arr methods

// length properties
console.log(arry.length)

// push properties
arr.push('ghanshyam')
console.log(arr)

// pop properties
arr.pop();
console.log(arr)
// unshift properties to add at first
arr.unshift('pandey')
console.log(arr)
// shift properties delete from first 
arr.shift()
console.log(arr)

// 3 different way of declaration  var, let, const

// var 
var a = 29;
// redeclare in var 
var a = 89;
console.log("redeclare in var ",a)
// reassign in var 
a = 4954;
console.log("reassign in var ",a);

// let 
let b = 5;
// reassign in let
b = 53;
console.log("reassign in let ",b)

// const
const c = 33;
console.log("not reassign and not redeclare in const",c)



