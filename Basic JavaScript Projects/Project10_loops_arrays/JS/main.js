function Count_To_Hundred (){ //while loops
    var Digit ="";
    var x = 1;
    while (x<101) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Hundred").innerHTML=Digit;
}
function practice() { //string length

var str = "Hello World!";
var n = str.length;
document.getElementById("practice").innerHTML = n;
}

    var instruments = ["guitar", "drums", "piano"]; ///for loop
    var content = "";
    var y;
    function for_loop() {
        for (y=0; y<instruments.length; y++){
            content += instruments[y] + "<br>";
        }
        document.getElementById("list_of_instruments").innerHTML = content;
    
}

function hoopers() { //array
    var bball = []
    bball[0] = "dunking";
    bball[1] = "dribbling";
    bball[2] = "passing";
    document.getElementById("basketball").innerHTML = "in this pic, the player is" + bball[1] 
}

function constant_function(){//constant
    const Kevin_Durant = {position:"SF", height:"7ft", ppg:"30"};
    Kevin_Durant.ppg = "28";
    Kevin_Durant.team = "New Jersey";
    document.getElementById("constant").innerHTML = "Kevin Durant is " + Kevin_Durant.height + Kevin_Durant.team + Kevin_Durant.position + "who averages " + Kevin_Durant.ppg;
}

function let_function(){//let function
    var x = "tomatoes";
    document.write(x)
    {
        let x = "cucumbers"
        document.write(x)
    }

    document.write(x);
}

let Kevin_Durant = {//let object
    ppg: "28",
    team: "New Jersey",
    height:"7ft",
    description: function() {
        return "KD is a " + this.height + this.team + "who averages" + this.ppg;
        } 
};  
       document.getElementById("return").innerHTML = Kevin_Durant.description();