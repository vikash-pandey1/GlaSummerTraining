console.log("start");

// setTimeout(function(){
//     console.log("after 4 sec")
// },9000)
// setTimeout(function() {
//     console.log("after 2 sec")
// }, 2000);
// console.log("end")

// function step1(fn){
//     setTimeout(function() {
//         console.log("after 2 sec")
//         fn();
//     },2000);
// }
// function step2(){
//     setTimeout(function()  {
//         console.log("after 4 sec")
//     }, 4000);
// }
// challenge insta

function step1(cb){
    setTimeout(function(){
        console.log("selecting image")
        cb("selecting image");
    }, 4000);
}
function step2(image){
    setTimeout(function() {
        console.log("after filter applied on ${image}")
    }, 4000);
}
step1(function(image){
    step2(image);
});

