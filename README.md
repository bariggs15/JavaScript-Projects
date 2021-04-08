# JavaScript Projects

## Projects 

* [Tic-Tac-Toe](#Tic-Tac-Toe) 
* [Calculator](#Calculator)
* [Pizza-Menu](#Pizza-Menu)


### Tic Tac Toe
This project had several layers of HTML and CSS, combined with JS to allow logic of a user to player to play the class Tic Tac Toe game against an AI. Techniques involved were the user or AI had to get '3 in a row' in order to win (and get a line drawn in). Below is a snippet of code that shows some of the JS: 

      //This variable keep track of turn
    let activeplayer = 'x';
    //This array stores an array of of move. Use this to determine win conditions.
    let selectedsquares = [];

    //this function is for playing x or o in a square
    function placexoro(squarenumber) {
        //this condition ensure square hasn't been selected already. The .some() method is used to check each element of selectedSquare to see if it contains square number clicked on
        if(!selectedsquares.some(element => element.includes(squarenumber))) {
            //this variable retireves html element id that was clicked
            let select = document.getElementById(squarenumber);
            //this condition check's whose turn it is
            if (activeplayer === 'x') {
                //if activeplayer = x, then x.png is placed in html
                select.style.backgroundImage='url("images/x.png")';
            } else {
                //if not x, then o
                select.style.backgroundImage='url("images/o.png")';
            }
            //square number and activeplayer are concatenated together and added to array
            selectedsquares.push(squarenumber + activeplayer); 
            checkwinconditions(); 
            //function to check win conditions
            if (activeplayer === 'x') {
                // if not - o
                activeplayer = 'o'
            } else {
                //change active player to x
                activeplayer = 'x';
            }
            
 ### Calculator
This is a calculator web application that allows interactive input from the user to get the appropriate mathematical return. Attached is some of the JS code involved:

    const Perform_Calculations= {
        '/':(First_Operand, Second_Operand) => First_Operand/Second_Operand, 
        '*':(First_Operand, Second_Operand) => First_Operand*Second_Operand,
        '+':(First_Operand, Second_Operand) => First_Operand+Second_Operand,
        '-':(First_Operand, Second_Operand) => First_Operand-Second_Operand,
        '=':(First_Operand, Second_Operand) => Second_Operand
    };

    function Calculator_Reset() {
        Calculator.Display_Value = '0';
        Calculator.First_Operand = null;
        Calculator.Wait_Second_Operand = false;
        Calculator.operator = null;
    }
    
 ### Pizza Menu
This web application allows the user to add ingredients to a pizza and modify it based on the number of toppings and size they want. This will affect the price which will be output as a display on the screen. These are some of the JS functions involved:

    function getTopping(runningTotal,text1) {
      var toppingTotal = 0;
      var selectedTopping = [];
      var toppingArray = document.getElementsByClassName("toppings");
      for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
          selectedTopping.push(toppingArray[j].value);
          console.log("selected topping item: ("+toppingArray[j].value+")");
          text1 = text1+toppingArray[j].value+"<br>";
        }
      }
      var toppingCount = selectedTopping.length;
      if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
      } else {
        toppingTotal = 0;
      }
      runningTotal = (runningTotal + toppingTotal);
      console.log("total selected topping items: "+toppingCount);
      console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
      console.log("topping text1: "+text1);
      console.log("Purchase Total: "+"$"+runningTotal+".00");
      document.getElementById("showText").innerHTML=text1;
      document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
      };	
