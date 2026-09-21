function minor(n){
    if(n<18)
        return "minor"
}
function adult(n){
    if(n>=18)
        return "adult"
}
let describeAge=(n)=>{
    if(n<18){
        return minor(n)
    }
    else{
        return adult(n)
    }
}
console.log("You are a",describeAge(20))