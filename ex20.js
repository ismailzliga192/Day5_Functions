let greeter =() => "HI!"
let makeGreeter = () =>{
    return greeter()
}
console.log(makeGreeter())