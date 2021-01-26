            
var drink1 = "coffee";
var drink2 = "water";

function Practice() { //practicing pulling a function from JS to HTML
    var drink1 = "coffee";
    var liquid = drink1.toUpperCase() //uppercase after clicking button
    document.getElementById("favorites").innerHTML = liquid
}

function concatenate() { //practicing concatenating a sentence
    var practice = "I am practicing"; 
    practice += " how to concatenate a sentence"; 
    document.getElementById("combine").innerHTML = practice
}

function add() {
    var x = 788;
    var y = 212;
    var z = x+y;
    document.getElementById("add").innerHTML = z

}