function my_dictionary() {
    var sports = {
        Basketball = "Shai Gilgeous Alexander",
        Football = "Baker Mayfield",
        Baseball = "Mike Trout",
        Golf = "Dustin Johnson"
    };
    delete sports.Football;
    document.getElementById("demo").innerHTML = sports.Football;
}