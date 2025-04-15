function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("loop").innerHTML = Digit;
}

let text = "Val Joshua Baldon";
let nameLength = text.length;
document.getElementById("challenge").innerHTML = nameLength;

/*for Loop Assignment */


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_Of_Instruments").innerHTML = Content;
}


/*document.getElementById().innerHTML*/

function drink_Soda() {
    var Drink_Soda = [];
    Drink_Soda [0] = "Ginger Ale";
    Drink_Soda [1] = "Sprite";
    Drink_Soda [2] = "Coke";
    Drink_Soda [3] = "Redbull";
    document.getElementById("Drink").innerHTML = "I want you to drink " + Drink_Soda[2] + ".";
}


/*const keyword assignment*/

function constant_Function() {
    const Car_Brand = {type:"Honda", brand:"Civic", color:"Gray"};
    Car_Brand.type = "Honda";
    Car_Brand.price = "$1500";
    document.getElementById("Constant").innerHTML = "The nicest car on planet earth is " + Car_Brand.type + " - it's only " + Car_Brand.price;
}

/*Let Challenge*/

let X = "Joshua";
document.getElementById("data").innerHTML = X;

/*return Challenge*/

document.getElementById("demo").innerHTML = myFunction("Canaan")

function myFunction(name) {
    return "Hello " + name;
}

/*OBJECT ASSIGNMENT*/

let guitar = {
    make: "Ibanez",
    model: "G3500",
    year: "1995",
    color: "Sunburst-Red",
    description : function() {
        return "This guitar is " + this.make  + this.model  + this.color  + this.year;
    }
};
document.getElementById("Guitar_Object").innerHTML = guitar.description();

/*Break*/

let BreakText = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

/*Continue*/
    
let ContinueText = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo1").innerHTML = text;

