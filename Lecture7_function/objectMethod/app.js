// let marks = {
//     web: 80,
//     java:100,
//     html:100,
//     css:89,

//     //method
//     totalMarks: function(){
//         return 90+20+50
//     }
// }
// console.log(marks.java)
// console.log(marks.web)
// console.log(marks.html)
// console.log(marks.totalMarks())


// --- advanced this keyword---
let marks = {
    web: 80,
    java:100,
    html:100,
    css:89,

    //method
    totalMarks: function(){
        return 90+20+50
    },
    total: function(){
        return this.java + this.web // also write return marks.java + marks.web
    }
}
console.log(marks.total())
console.log(this)