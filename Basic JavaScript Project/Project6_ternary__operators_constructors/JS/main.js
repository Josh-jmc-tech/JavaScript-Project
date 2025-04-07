function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Josh = new Vehicle("Toyota", "Camry", 1997, "Black");
var Michaella = new Vehicle("Mitsubishi", "Lancer", 2001, "Pearl-White");
var Canaan = new Vehicle ("Kia", "Forte", 2021, "Silver-Gray");

function myFunctions() {
    document.getElementById("New_and_This").innerHTML = 
    " Canaan drives a " + Canaan.Vehicle_Color + " -colored " + Canaan.Vehicle_Model + " manufactured in " + Canaan.Vehicle_Year;
}

function count_Function () { //This part i used multiplication
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
    var Starting_Point = 13;
    function Multiply_two() {
        Starting_Point *= 2;
    }
    Multiply_two();
    return Starting_Point;
    }
}