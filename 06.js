var x = 10;
function b(){
    console.log(x)
}
b()
console.log(this.b)
console.log(window.b) // because in global space window === this