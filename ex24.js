 let n=0
 let Counter=()=>{
 return ++n
}
let makeCounter=()=>{
    return Counter()
    
}
console.log("counter =>", makeCounter())
console.log("counter =>", makeCounter())
console.log("counter =>", makeCounter())
