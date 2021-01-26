function add() {//addition
    var x = 788;
    var y = 212;
    var z = x+y;
    document.getElementById("math").innerHTML = z
}

function subtract() {//subtraction
    var x = 788;
    var y = 212;
    var z = x-y;
    document.getElementById("math2").innerHTML = z
}

function multiply() {//multiplication
    var x = 788;
    var y = 212;
    var z = x*y;
    document.getElementById("math3").innerHTML = z
}

function divide() {//division
    var x = 788;
    var y = 212;
    var z = x/y;
    document.getElementById("math4").innerHTML = z
}
function unary() {//unary
    var x = 788;
 
    var z = x
    document.getElementById("math6").innerHTML = -z
}

function modulus() {//modulus
    var x = 788;
    var y = 212;
    var z = x%y;
    document.getElementById("math5").innerHTML = z
}

window.alert(Math.random()+12345)//random