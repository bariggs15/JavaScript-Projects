//THis variable keep track of turn
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
        //this function plays placement sound
        audio('./media/place.mp3');
        //checks to see if computers turn
        if(activeplayer==='o'){
            disableclick();
            setTimeout(function() {computersturn();}, 1000);
        }
        //rturn true need for computerturn to work
        return true;
    }

    //fucntion allows reults in random square to be selected
    function computersturn () {
        let success = false; //Boolean needed for while loops
        let pickasquare; //this allow loop to keep trying if square is selected already
        while(!success) {
            //random number btw 0 and 8 selected
            pickasquare = String(Math.floor(Math.random() * 9));
            // if random number evaluated returns true, the square hasn't been selected
            if (placexoro(pickasquare)) {
                //calls a function
                placexoro(pickasquare);
                //changes boolean and ends loop
                success = true;
            };
        }
    }

}

function checkwinconditions() {
    //checks for wins. drawline function if condition is met
    if (arrayincludes('0x', '1x', '2x')) {drawwinline(50,100,558,100); }
    else if (arrayincludes('3x', '4x', '5x')) {drawwinline(50,304,558,304); }
    else if (arrayincludes('6x', '7x', '8x')) {drawwinline(50,508,558,508); }
    else if (arrayincludes('0x', '3x', '6x')) {drawwinline(100,50,100,558); }
    else if (arrayincludes('1x', '4x', '7x')) {drawwinline(304,50,304,558); }
    else if (arrayincludes('2x', '5x', '8x')) {drawwinline(508,50,508,558); }
    else if (arrayincludes('6x', '4x', '2x')) {drawwinline(100,508,510,90); }
    else if (arrayincludes('0x', '4x', '8x')) {drawwinline(100,100,520,520); }
    else if (arrayincludes('0o', '1o', '2o')) {drawwinline(50,100,558,100); }
    else if (arrayincludes('3o', '4o', '5o')) {drawwinline(50,304,558,304); }
    else if (arrayincludes('6o', '7o', '8o')) {drawwinline(50,508,558,508); }
    else if (arrayincludes('0o', '3o', '6o')) {drawwinline(100,50,100,558); }
    else if (arrayincludes('1o', '4o', '7o')) {drawwinline(304,50,304,558); }
    else if (arrayincludes('2o', '5o', '8o')) {drawwinline(508,50,508,558); }
    else if (arrayincludes('6o', '4o', '2o')) {drawwinline(100,508,510,90); }
    else if (arrayincludes('0o', '4o', '8o')) {drawwinline(100,100,520,520); }
    //if a tie
    else if (selectedsquares.length >= 9) {
        //tie sounds
        audio('./media/tie.mp3');
        //.3 seconds timer before reset game is called
        setTimeout(function () { resetgame(); }, 1000);
    }
    //win condiontion
    function arrayincludes (squarea, squareb, squarec) {
        ///next 3 variables will be used to check if 3 in a row
        const a = selectedsquares.includes(squarea);
        const b = selectedsquares.includes(squareb);
        const c = selectedsquares.includes(squarec);
        // if 3 varaible we pass are all incldued in our array true our else if condition executes the drawwinline function
        if (a === true && b === true && c === true) {return true; }
    }
}    

function disableclick() { //makes body elements temporarily unclickable
    //this make body unclickable
    body.style.pointerevents = 'none';
    //allow clickable after 1 second
    setTimeout(function() {body.style.pointerevents = 'auto';}, 1000);
}

function audio(audiourl) {
    let audio = new Audio(audiourl);
    audio.play();
}

function drawwinline(coordx1, coordy1, coordx2, coordy2) {//html canvas to draw win lines
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d'); //gives access to methods and properties on canvas
    let x1=coordx1,//indicates where to start on x and y axis
    y1=coordy1,
    x2=coordx2, //indicates where to end on x and y axis
    y2=coordy2,
    x=x1,
    y=y1;

    function animatelinedrawing() {//interacts with canvas
    //create a loop for when game ends and restarts
        const animationloop = requestAnimationFrame(animatelinedrawing);
        c.clearRect(0,0,608,608); //clear cont from last iteration
        c.beginPath();//starts new path
        c.moveTo(x1,y1);//starting point 
        c.lineTo(x,y);//end point
        c.lineWidth= 10;
        c.strokeStyle='rgba(70,255,33,0.8)';
        c.stroke();//draws everything laid out
        if (x1 <= x2 && y1 <= y2) {//checks if we've reach endpoint
            if(x < x2) { x +=10; }
            if(y < y2) { y +=10; }
            if(x >= x2 && y >= y2)  { cancelAnimationFrame(animationloop); }//cancels loop if reach end points
        }
        if (x <= x2 && y >= y2) {
            if(x < x2) { x +=10; }
            if(y > y2) { y -=10; }
            if(x >= x2 && y <= y2)  { cancelAnimationFrame(animationloop); }
        }
    }
    
    function clear() {//clears canvas after game
        const animationloop = requestAnimationFrame(clear); //line starts our animation loop
        c.clearRect(0,0,608,608);
        cancelAnimationFrame (animationloop);
    }
    disableclick();//no clicking while sound playing
    audio('./media/winGame.mp3'); //plays winning sound
    animatelinedrawing();
    setTimeout(function() {clear(); resetgame(); }, 1000);
}

function resetgame() {//resets the game 
    for (let i = 0; i<9; i++) {//interate through each HTML square element
            let square = document.getElementById(String(i));//var gets the html element of i
            square.style.backgroundImage = ""//removes element from background image
    }
    selectedsquares = [];

}