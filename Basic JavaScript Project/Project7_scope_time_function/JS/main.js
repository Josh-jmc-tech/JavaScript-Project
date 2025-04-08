var X = 20;
function Add_Numbers_1() {
    document.write(30 + X + "<br>");
}
function Add_Numbers_2() {
    document.write(X + 5);
}
Add_Numbers_1();
Add_Numbers_2();

function get_Date() {
    if (new Date().getHours() < 20) {
    document.getElementById("Greeting").innerHTML = "How are you?";
    }
}





// IF ASSIGNMENT and ELSE //
function Age_Function() {
    Age = document.getElementById("Age").value;
if (Age >= 18) {
    Marry = "You are old enough to marry!";
}
else {
    Marry = "You are not old enough to marry.";
}
    document.getElementById("How old are you?").innerHTML = Marry;
} 


//Else IF

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Coffee Time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "Siesta Time!";
    }
    else {
        Reply = "Goodnight!";
    }
    document.getElementById("Clock").innerHTML = Reply;
}

    


