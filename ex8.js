function MaxOfThree(x, y, z){
    let max=x
    if(y>max){
        max=y
    }
    else if (z>max){
        max=z
    }
    else{
        max=x
    }
    return max
}
console.log(MaxOfThree(15,10,5))