function Ride_Function() {
    var Height, Can_Ride; 
       Height = document.getElementById("Height").value;
       Can_Ride = (Height < 52) ? "you are too short":"you are tall enough";
       document.getElementById("Ride").innerHTML = Can_Ride + "to ride.";
  }