
function subtraction_Function() {
    var subtraction = 300 - 900;
    document.getElementById("Math").innerHTML = "300 - 900 = " + subtraction;
}

function addition_Function() {
    var addition = 3 + 5;
    document.getElementById("add_Math").innerHTML = "3 + 5 = " + addition;
}

function multiplication_Function() {
    var multiplication = 3 * 5;
    document.getElementById("multiply_Math").innerHTML = "3 X 5 = " + multiplication;
}

function division_Function() {
    var division = 30 / 7;
    document.getElementById("division_Math").innerHTML = " 30 / 7 = " + division;
}

function more_Math() {
    var simple_Math = (2 + 5) * 30 - 10 / 2;
    document.getElementById("multiple_Operation").innerHTML = "(2 + 5) * 30 - 10 / 2 = " + simple_Math;
}

function modulus_Operator() {
    var modulusMath = 75 % 6;
    document.getElementById("modulus_Operation").innerHTML = "When you divide 75 by 6 you have a remainder of: " + modulusMath;
}

function negation_Operator() {
    var x = 250;
    document.getElementById("negation_Operation").innerHTML = x;
}

    var x = 10;
    x++;
    document.write(x);

    window.alert(Math.random());

    function Dictionary() {
        var Animal = {
            Species: "Cat",
            Color: "Orange",
            Breed: "Senegalese",
            Age:2,
            Sound:"Meow!",
        };
        document.getElementById("Dictionary").innerHTML = Animal.Color;
    }