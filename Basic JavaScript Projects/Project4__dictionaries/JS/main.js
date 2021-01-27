function my_dictionary() {
    var sports= { 
    basketball:"Jordan",
    football:"Favre",
    baseball:"Bonds",
    golf:"Tiger"
    };
    delete sports.baseball;
    document.getElementById("demo").innerHTML=sports.baseball
       
  }