function full_sentence() {
    var one = "I'm going to "
    var two = "add these sentences together."
    var add_together = one.concat(two);
    document.getElementById("concatenate").innerHTML=add_together;
}

function slice1() {
    var three= "my name is Austin."
    var cut = three.slice(0,8);
    document.getElementById("slice").innerHTML=cut.toUpperCase();
}


function string_method() {
    var a = 2005;
    document.getElementById("numbers").innerHTML=a.toString();

}

function precision_method() {
    var x = 123456789.123456789
    document.getElementById("numbers2").innerHTML=x.toPrecision(7);
}