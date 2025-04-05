document.write ("1234"+5 + "<br>");
document.write(2E315 + "<br>");
document.write(-2E315+ "<br>");
document.write(10>=5 + "<br>"); 
console.log(2 + 5 + "/n");
console.log(2>=5 + "/n");

document.write(35==10 + "<br>");
x = 20;
y = 20;
document.write(x === y + "<br>");
x = 10;
y = "10";
document.write(x === y + "<br>");
x = 13
y = "true";
document.write(x === "true" + "<br>");

//Logical Operator

document.write(10 > 2 && 5 > 1); //AND

document.write(5 > 1 || 1 > 0); //OR

//Not Function

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 15);
}

function anothernot_Function() {
    document.getElementById("Another").innerHTML = !(20 > 1);
}
