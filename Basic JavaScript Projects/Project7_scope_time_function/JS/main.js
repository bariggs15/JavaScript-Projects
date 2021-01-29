function my_dictionary1() {
    var sports1= "basketball"//local
    document.write("I love" + sports1);
       }
function favorite1 () {
    document.write("my favorite sport is" + sports1);
}

my_dictionary(); 
favorite(); 


var sports= "basketball"//global
function my_dictionary() {
    document.write("I love" + sports);
       }
function favorite () {
  document.write("my favorite sport is" + sports);
}

my_dictionary(); 
favorite(); 



function get_Date() { //get hours if
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function good_evening() {
    if (new Date().getHours() < 18) {
        document.getElementById("demo").innerHTML = "Good day!";
      }
}

function Age_Function() { //if else
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "you are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_Function() {//if else if
    var Time = new Date().getHours() 
    var Reply ; 
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}