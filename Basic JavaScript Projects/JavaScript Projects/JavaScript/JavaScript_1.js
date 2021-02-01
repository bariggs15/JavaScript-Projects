function color_funtion() {
    var color_output;
    var color = document.getElementById("color_input").value;
    var color_string = "is a great color";
    switch(color) {
        case "red":
            color_output = "red" + color_string;
            break;
        case "blue":
            color_output = "blue" + color_string;
            break;    
        case "yellow":
            color_output = "yellow" + color_string;
            break;    
        case "green":
            color_output = "green" + color_string;
            break;
        case "black":
            color_output = "black" + color_string;
            break;    
            default:
            color_output = "enter a color";
    }
    document.getElementById("output").innerHTML=color_output;
}

function method() {
    var X = document.getElementsByClassName("Submit");
    X[0].innerHTML= "never give up";
}

function myCanvas() {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 10, 10);
}