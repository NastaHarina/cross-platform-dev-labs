var a = prompt("Upper: ")
var b = prompt("Lower: ")
var n = 100

var f = function(x){

    return x*x - Math.cos(x)

}

function Compute(a, b, n, f){

    var deltaX = (b - a)/n
    var sum = 0.0
    var x = 0.0

    for(i = 0; i < n; i++){
        x = a + i*deltaX
        sum += deltaX * f(x)
    }
    return sum
}


if (a > b){
    alert("Error A > B")
} else {
    console.log(Compute(a, b, n, f))
    alert(Compute(a, b, n, f))
}




