function factorial(x) {


    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1)
    }
}
var x = parseInt(prompt('Introduce un numero:'));
var num = factorial(x)
document.getElementById("div1").innerHTML = num
