function Ride_Function() { //height with inputs
    var Height, Can_Ride; 
       Height = document.getElementById("Height").value;
       Can_Ride = (Height < 52) ? "you are too short":"you are tall enough";
       document.getElementById("Ride").innerHTML = Can_Ride + "to ride.";
  }



  function vehicle (Make, Model, Year, Color) { //vehicle ID
      this.vehicle_make = Make;
      this. vehicle_model = Model;
      this. vehicle_Year = Year;
      this.vehicle_color = Color;
  }
  var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
  var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
  var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
  function myFunction() {
      document.getElementById("New_and_This").innerHTML = "Erik drives a " + Erik.vehicle_color + " -colored " + Erik.vehicle_model + " manufactured in " + Erik.vehicle_Year;
  }



  function Nest() { //nesting
    document.getElementById("Nested_Function").innerHTML = Color();
    function Color() {
        var first = "blue";
        function second() {first += "red";}
        second();
        return first;
    }
  }