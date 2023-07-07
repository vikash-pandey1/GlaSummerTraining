let Pi = 3.145;
let magicNum  = 7;
console.log("viaksh bhaiya teaching web")
function sqr(num){
    return num+num
}
let obj = {
    first:"vikash",
    last:"pandey",
    fullname:"vikash"+"pandey",
    getName:function(){
        //console.log(this.first+" "+this.last)
        return (this.first+" "+this.last)
    }
}
console.log(obj.getName())
console.log(sqr(5))