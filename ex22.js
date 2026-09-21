//Global Scope
let V="Variable 1"
function outward (){
    //Function Scope
    let V="Variable 2"
    {
        //no variable declaration, so JS search outward
        console.log("the innermost:",V)
    }
}
outward()