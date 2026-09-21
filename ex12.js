function isEven(n){
   if(n%2==0)
    return "even"
}
function isOdd(n){
    if(n%2!==0) 
        return "odd"
}
function describeParty(n){
   
    if(n % 2==0){
        return isEven(n)
    }
    else{
        return isOdd(n)
    }
}
console.log(describeParty(7))