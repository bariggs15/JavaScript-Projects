function get_todos() {//gets task from input from 
    var todos = new Array; //creates an array of tasks input
    var todos_str=localStorage.getItem('todo'); //pull task that was saved in web browser memory
    if(todos_str !== null){
        todos = JSON.parse(todos_str);//if input isn't null JSON.parse will communicate with web browser to make JS object
    }
    return todos;
}

function add() { //add the inputed tasks to get_todos function array
    var task = document.getElementById('task').value; //takes inputed task and creates a variable

    var todos = get_todos();
    todos.push(task); //this adds a new task to the end of array
    localStorage.setItem('todo',JSON.stringify(todos)); //converts taks input to JSON string
    document.getElementById("task").value="";
    show();

    return false;
}

//this function keeps tasks permanently displayed on screen
function show() {
    var todos = get_todos();//this sets the task that was retrieved as a variable

    var html = '<ul>';//sets up each task as an unordered list
    for(var i=0; i<todos.length; i++) { //ddispalys the task to the list in order it was input
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>'; 
    
    };  
    html += '</ul>';
    document.getElementById('todos').innerHTML=html;//displays the task as a list


}
document.getElementById('add').addEventListener('click', add);
show();//perimanenlty show on screen

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

var buttons = document.getElementsByClassName('remove');
for (var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);

};